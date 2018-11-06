<template>
  <div class="extech-register-container">
    <el-row style="margin-top: 50px">
      <el-col :span="3">
        <div style="height: 300px;">
          <el-steps direction="vertical" :space="400" :active="activeStep" finish-status="success" process-status="process">
            <el-step class="el-step-item" title="填写个人报名信息"></el-step>
            <el-step class="el-step-item" title="确认信息是否无误" description="确认是否需要填写其他与会人员信息"></el-step>
            <el-step class="el-step-item" title="提交与会材料"></el-step>
            <el-step class="el-step-item" title="报名完成！"></el-step>
          </el-steps>
        </div>
      </el-col>
      <el-col :span="21">
        <h1><i class="el-icon-document"></i> | ExTech 2018 报名表</h1>
        <el-form :model="info" :rules="rules" ref="ruleForm" label-width="12rem" class="register-form">
          <el-row>
            <el-col :span="6">
              <el-form-item label="请输入姓名" prop="name">
                <el-input class="el-input" v-model="info.name"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="性别">
                <el-select class="el-select" v-model="info.gender">
                  <!-- 这里的key官方推荐在v-for时使用，不然会警告，但不影响使用 -->
                  <el-option v-for="item in options" :key="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="请输入所在院校">
                <el-input class="el-input" v-model="info.univ"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="请输入联系方式" prop="contact">
                <el-input class="el-input" v-model="info.contact"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-form-item label="请输入预计到达日期" required>
              <el-col :span="5">
                <el-form-item prop="date">
                  <el-date-picker type="date" placeholder="请选择日期" v-model="info.date" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item>
                  <el-time-picker type="fixed-time" placeholder="请选择时间" v-model="info.time" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
              <el-col :span="14">
                <el-form-item label="是否需要接机">
                  <el-switch v-model="info.needsPickup"
                             active-text="需要接机" inactive-text="不需要接机"></el-switch>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="10">
              <el-form-item label="是否需要住宿">
                <el-switch v-model="info.needsAccom"
                           active-text="需要住宿" inactive-text="不需要住宿"></el-switch>
              </el-form-item>
            </el-col>
            <transition name="fade">
              <el-col :span="10" v-show="info.needsAccom">
                <el-form-item label="是否需要单人间">
                  <el-switch v-model="info.demandsSingle"
                             active-text="需要单人间" inactive-text="不需要单人间"></el-switch>
                </el-form-item>
              </el-col>
            </transition>
          </el-row>
          <el-row>
            <el-form-item label="报告名称" prop="presTitle">
              <el-input type="textarea" v-model="info.presTitle"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="是否申请口头报告" prop="isOral">
              <el-radio-group v-model="info.isOral">
                <el-radio border label="是，进行口头报告"></el-radio>
                <el-radio border label="否，仅进行墙报展示"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-row>
          <!--<el-checkbox-group v-model="">-->
          <!--<el-checkbox label="备注选项" name=""></el-checkbox>-->
          <!--</el-checkbox-group>-->
          <el-form-item label="其它备注信息">
            <el-input type="textarea" v-model="info.notes"></el-input>
          </el-form-item>
          <el-button @click="createInfo('ruleForm')" type="success" round>创建个人报名信息</el-button>
        </el-form>
        <el-card class="box-card">
          <template>
            <el-table :data="tableData" style="width: 90%; margin: 0 auto">
              <el-table-column label="预计到达日期" prop="date" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="个人信息" prop="name" sortable>
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <h1 class="popover-text">姓名: {{ scope.row.name }}</h1>
                    <h1 class="popover-text">性别: {{ scope.row.gender }}</h1>
                    <h1 class="popover-text">院校: {{ scope.row.univ }}</h1>
                    <h1 class="popover-text">联系方式: {{ scope.row.contact }}</h1>
                    <h1 class="popover-text" v-if="scope.row.needsPickup">需要接机</h1>
                    <h1 class="popover-text" v-if="!scope.row.needsPickup">不需要接机</h1>
                    <h1 class="popover-text" v-if="scope.row.needsAccom">需要住宿</h1>
                    <h1 class="popover-text" v-if="!scope.row.needsAccom">不需要住宿</h1>
                    <h1 class="popover-text" v-if="scope.row.needsAccom && scope.row.demandsSingle">需要单人间</h1>
                    <h1 class="popover-text" v-if="scope.row.needsAccom && !scope.row.needsAccom">不需要单人间</h1>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="报告名称及类型" prop="presTitle">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <h1 class="popover-text">报告名称: {{ scope.row.presTitle }}</h1>
                    <h1 class="popover-text" v-if="scope.row.isOral">报告类型: 口头报告</h1>
                    <h1 class="popover-text" v-if="!scope.row.isOral">报告类型: 墙报</h1>
                    <div slot="reference" class="pres-wrapper">
                      <i class="el-icon-document"></i>
                      {{ scope.row.presTitle }}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="其它备注信息" prop="notes"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="item">
                  <el-button type="info" size="mini" @click="editInfo(item.$index)">编辑</el-button>
                  <el-button type="danger" size="mini" @click="deleteInfo(item.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-card>
        <el-card class="box-card">
          <el-upload class="upload-section" drag
                     action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-card>
        <el-button @click="submitInfo" type="primary" round>提交全部报名信息</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ExTechRegister',
  data () {
    return {
      activeStep: 0,
      info: {
        name: '',
        date: '',
        time: '',
        needsPickup: false,
        needsAccom: false,
        demandsSingle: false,
        gender: '',
        univ: '',
        contact: '',
        presTitle: '',
        isOral: false,
        notes: ''
      },
      options: [
        '女', '男'
      ],
      tableData: [
        // {date: '0808', time: '12:00', name: 'Bill', gender: '男', univ: '中山大学', contact: '(020) 11111111', presTitle: 'Some Title', isOral: true, notes: 'Some Notes'},
        // {date: '0608', name: 'Sarah', gender: '女', univ: '中山大学', contact: '(020) 11111111', presTitle: 'Some Title', isOral: false, notes: 'Some Notes'},
        // {date: '0208', time: '18:00', name: 'Tom', gender: '男', univ: '中山大学', contact: '(020) 11111111', presTitle: 'Some Title', isOral: true, notes: 'Some Notes'}
      ],
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        contact: [
          { required: true, message: '请输入有效联系方式', trigger: 'blur' }
        ],
        presTitle: [
          { required: true, message: '请填写报告名称', trigger: 'change' }
        ],
        isOral: [
          { required: true, message: '请选择报告类型', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    createInfo (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '恭喜，信息提交成功！',
            type: 'success'
          })
          this.tableData.push(this.info)
          this.resetForm()
          this.activeStep = 1
        } else {
          console.log('error submission!')
          this.$message({
            showClose: true,
            message: '请检查所有必填项目是否都已填写~',
            type: 'error'
          })
          return false
        }
      })
    },
    editInfo (index) {
      // this.tableData.splice(index, 1)
    },
    deleteInfo (index) {
      this.tableData.splice(index, 1)
    },
    resetForm () {
      this.info = {name: '', time: '', demandsSingle: false, gender: '', univ: '', contact: '', presTitle: '', isOral: false, notes: ''}
    },
    submitInfo () {
      this.$message({
        showClose: true,
        message: '这是一条警告消息',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.extech-register-container {
  margin: 1rem 2rem;
}
.el-step-item {
  margin-bottom: 10rem;
}
.register-form {
  padding: 2rem;
}
.box-card {
  margin: 1rem;
  border-radius: 5px;
  width: 95%;
  min-height: 250px;
}
.popover-text {
  padding: 1rem;
  border-bottom: 1px solid lightgreen;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-to {
  opacity: 0;
}
.upload-section {
  margin: 2rem;
}
</style>

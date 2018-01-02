import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/views/home'], resolve)

// 电台
const Radio = () => import(/* webpackChunkName: "group-radio" */ '@/views/radio')
const RadioIndex = () => import(/* webpackChunkName: "group-radio" */ '@/views/radio/index')
const RadioCategory = () => import(/* webpackChunkName: "group-radio" */ '@/views/radio/category')
const RadioDetail = () => import(/* webpackChunkName: "group-radio" */ '@/views/radio/detail')
const RadioComment = () => import(/* webpackChunkName: "group-radio" */ '@/views/radio/comment')

// 心理测试
const Test = () => import('@/views/test')
const TestDetail = () => import('@/views/test/test-detail')
const TestStart = () => import('@/views/test/test-start')
const TestIndex = () => import('@/views/test/index')
// 社区
const CommunityDetail = () => import('@/views/community/community-detail')
const CreatCrticle = () => import('@/views/community/creat-crticle')
const CommunitySearch = () => import('@/views/community/community-search')
const CommunityIndex = () => import('@/views/community/community-index')
const Community = () => import('@/views/community/index')

// 专家咨询
const Advisory = () => import('@/views/advisory')
const AdvisoryIndex = () => import('@/views/advisory/index')
const ConsultantInfo = () => import('@/views/advisory/consultantInfo')
const Resume = () => import('@/views/advisory/resume')
const Appointment = () => import('@/views/advisory/appointment')
const AdvisoryPay = () => import('@/views/advisory/pay')
const Partnership = () => import('@/views/advisory/partnership')
const Complaints = () => import('@/views/advisory/complaints')
const Thank = () => import('@/views/advisory/thank')
const AdvisoryList = () => import('@/views/advisory/advisoryList')
const Receipt = () => import('@/views/advisory/receipt')
const ReceiptDetail = () => import('@/views/advisory/receiptDetail')

// 登录
const Login = () => import('@/views/login/login')
const LoginIndex = () => import('@/views/login/login-index')
const LoginLogin = () => import('@/views/login/login-login')
const LoginReg = () => import('@/views/login/login-reg')
const LoginStep1 = () => import('@/views/login/login-step1')
const LoginStep2 = () => import('@/views/login/login-step2')
const LoginStep3 = () => import('@/views/login/login-step3')
const ResetPwd = () => import('@/views/login/reset-pwd')

// 个人中心opinion
const User = () => import(/* webpackChunkName: "group-user" */ '@/views/user')
const UserIndex = () => import(/* webpackChunkName: "group-user" */ '@/views/user/index')
const MyWallet = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mywallet')
const MyTest = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mytest')
const MyTestResult = () => import(/* webpackChunkName: "group-user" */ '@/views/user/testresult')
const MyFollow = () => import(/* webpackChunkName: "group-user" */ '@/views/user/myfollow')
const MyStatus = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mystatus')
const Set = () => import(/* webpackChunkName: "group-user" */ '@/views/user/set')
const Opinion = () => import(/* webpackChunkName: "group-user" */ '@/views/user/opinion')
const MyLevel = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mylevel')
const MyCollect = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mycollect')
const MyMessage = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mymessage')
const MyChat = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mychat')
const MyComment = () => import(/* webpackChunkName: "group-user" */ '@/views/user/comment')
const MyNotice = () => import(/* webpackChunkName: "group-user" */ '@/views/user/mynotice')
const MyInfo = () => import(/* webpackChunkName: "group-user" */ '@/views/user/myinfo')
const EditNickName = () => import(/* webpackChunkName: "group-user" */ '@/views/user/editnickname')
const EditSign = () => import(/* webpackChunkName: "group-user" */ '@/views/user/editsign')

// 两性文章
const Article = () => import('@/views/article/index')
const ArticleItem = () => import('@/views/article/article-item')
const ArticleIndex = () => import('@/views/article/article')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/advisory',
    component: Advisory,
    children: [
      {
        path: '/',
        component: AdvisoryIndex,
        name: 'advisory'
      },
      {
        path: '/consultantInfo',
        component: ConsultantInfo,
        name: 'consultantInfo'
      },
      {
        path: '/resume',
        component: Resume,
        name: 'resume'
      },
      {
        path: '/appointment',
        component: Appointment,
        name: 'appointment'
      },
      {
        path: '/AdvisoryPay',
        component: AdvisoryPay,
        name: 'AdvisoryPay'
      },
      {
        path: '/partnership',
        component: Partnership,
        name: 'partnership'
      },
      {
        path: '/complaints',
        component: Complaints,
        name: 'complaints'
      },
      {
        path: '/thank',
        component: Thank,
        name: 'thank'
      },
      {
        path: '/advisoryList',
        component: AdvisoryList,
        name: 'advisoryList'
      },
      {
        path: '/receipt',
        component: Receipt,
        name: 'receipt'
      },
      {
        path: 'receiptDetail',
        component: ReceiptDetail,
        name: 'receiptDetail'
      }
    ]
  },
  {
    // 电台
    path: '/radio',
    component: Radio,
    children: [
      {
        // 首页
        path: '',
        component: RadioIndex,
        name: 'radio'
      },
      {
        // 分类页
        path: ':category',
        component: RadioCategory,
        name: 'radioCategory'
      },
      {
        // 播放页
        path: 'voice/:voiceName',
        component: RadioDetail,
        name: 'radioDetail'
      },
      {
        // 评论页
        path: 'comment/:voiceName',
        component: RadioComment,
        name: 'radioComment'
      }
    ]
  },
  {
    // 心理测试
    path: '/test',
    component: Test,
    children: [
      {
        path: '',
        component: TestIndex,
        name: 'test'
      },
      {
        path: 'testDetail/:Id',
        component: TestDetail,
        name: 'testDetail'
      },
      {
        path: 'testStart/:Id',
        component: TestStart,
        name: 'testStart'
      }
    ]
  },
  {
    // 社区
    path: '/community',
    component: Community,
    children: [
      {
        path: '',
        component: CommunityIndex,
        name: 'community'
      },
      {
        path: 'communityDetail',
        component: CommunityDetail,
        name: 'communityDetail'
      },
      {
        path: 'creatCrticle',
        component: CreatCrticle,
        name: 'creatCrticle'
      },
      {
        path: 'communitySearch',
        component: CommunitySearch,
        name: 'communitySearch'
      }
    ]
  },
  {
    // 登录、注册
    path: '/login',
    component: Login,
    children: [
      {
        path: '/',
        component: LoginIndex,
        name: 'loginIndex'
      },
      {
        path: '/loginLogin',
        component: LoginLogin,
        name: 'loginLogin'
      },
      {
        path: '/loginReg',
        component: LoginReg,
        name: 'loginReg'
      },
      {
        path: '/loginStep1',
        component: LoginStep1,
        name: 'loginStep1'
      },
      {
        path: '/loginStep2/:type',
        component: LoginStep2,
        name: 'loginStep2'
      },
      {
        path: '/loginStep3',
        component: LoginStep3,
        name: 'loginStep3'
      },
      {
        path: '/resetPwd',
        component: ResetPwd,
        name: 'resetPwd'
      }
    ]
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        component: UserIndex,
        name: 'userIndex'
      },
      {
        path: 'wallet',
        component: MyWallet,
        name: 'myWallet'
      },
      {
        path: 'test',
        component: MyTest,
        name: 'myTest'
      },
      {
        path: 'test/result',
        component: MyTestResult,
        name: 'myTestResult'
      },
      {
        path: 'follow',
        component: MyFollow,
        name: 'myFollow'
      },
      {
        path: 'status',
        component: MyStatus,
        name: 'myStatus'
      },
      {
        path: 'set',
        component: Set,
        name: 'set'
      },
      {
        path: 'opinion',
        component: Opinion,
        name: 'opinion'
      },
      {
        path: 'level',
        component: MyLevel,
        name: 'myLevel'
      },
      {
        path: 'collect',
        component: MyCollect,
        name: 'myCollect'
      },
      {
        path: 'message',
        component: MyMessage,
        name: 'myMessage'
      },
      {
        path: 'chat/:id',
        component: MyChat,
        name: 'myChat'
      },
      {
        path: 'comment',
        component: MyComment,
        name: 'myComment'
      },
      {
        path: 'notice',
        component: MyNotice,
        name: 'myNotice'
      },
      {
        path: 'info',
        component: MyInfo,
        name: 'myInfo'
      },
      {
        path: 'editname',
        component: EditNickName,
        name: 'editname'
      },
      {
        path: 'editsign',
        component: EditSign,
        name: 'editsign'
      }
    ]
  },
  {
    // 两性文章
    path: '/article',
    component: Article,
    children: [
      {
        path: 'article-item/:Id',
        component: ArticleItem,
        name: 'article-item'
      },
      {
        path: '',
        component: ArticleIndex,
        name: 'article'
      }
    ]
  }
  ]
})

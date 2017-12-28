# 组件 #
#name: 组件说明
#values: 传入的参数
#emit: 返回的参数

head-tab: {
 name: 导航头 (参考：测试.psd -> 测试列表顶部tab),
 values: {
   list:[
      {
        name: '全部',
        index: 0
      },
      ...
   ]
 },
 emit: {
  @headTab{
    data: index
  }
 }
}

revise-area: {
  name: 选择省市 (参考：个人信息.psd -> 选择所在地),
  values: null,
  emit: {
    @areaClose: {
      data: null
    }
    @areaOk: {
      data: {
        province: '浙江',
        city: '杭州'
      }
    }
  }
}

revise-date: {
  name: 选择年月日 (参考：个人信息.psd -> 选择年龄),
  values: null,
  emit: {
    @dateColor: {
      data: null
    }
    @dateOk: {
      data: {
        age: '年龄'
      }
    }
  }
}

swiper-a: {
  name: 咨询师滑动框 (参考：心理.psd的续单人气王跟最新入驻),
  values: {
    list:[
      {
        picPath: '头像路径',
        name: '咨询师昵称',
        labelling: '咨询师标签',
        test: '咨询师介绍',
        toPath: '跳转链接'
      },
      ...
    ],
    ranking: Boolean 是否显示排名标签
  }
}

swiper-b: {
  name: 疑难杂症滑动框 (参考：心理.psd的人生疑难杂症),
  values: {
    list: [
       {
          imgPath: '图片路径',
          text: '文本',
          toPath: '跳转链接'
       },
       ...
    ]
  }
}

swiper-c: {
  name: 轮播框 (参考：心理app.psd的顶部轮播图),
  values: {
    list: [
      {
        imgPath: '图片路径',
        toPath: '跳转链接'
      },
      ...
    ]
  }
}

test-item: {
  name: 测试列表 (参考：测试.psd -> 测试列表的列表),
  values: {
    list: [
      {
        imgPath: '图片路径',
        title: '文章标题',
        text: '文章内容',
        testCount: '测试人数',
        commentCount: '评论人数',
        toPath: '跳转链接'
      },
      ...
    ]
  }
}

comment: {
  name: 一级评论 (参考：社区 -> 评论.psd),
  values: {
    postAddress: '请求地址'
  }
}

twoComment: {
  name: 二级评论 (参考：评论回复.jpg)，
  value: {
    postAddress: '请求地址'
  }
}


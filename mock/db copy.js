var Mock=require('mockjs')
module.exports=()=>{
    var data=Mock.mock( Mock.mock({
        'course|227': [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1000,
            course_name: '@ctitle(5,10)',
            autor: '@cname',
            college: '@ctitle(6)',
            'category_Id|1-6': 1,
            icon:Mock.Random.image('50x50', '#894FC4', '#FFF', 'png', '!')
          }
        ],
        'course_category|6': [
          {
            "id|+1": 1,
            "pid": -1,
            cName: '@ctitle(4)'
          }
        ]
      }))
    return data;
}
define({ "api": [
  {
    "type": "post",
    "url": "/user/checkUser",
    "title": "用户检查",
    "name": "checkUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录的用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>上一次登录验证的登录名</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录的用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录的密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户的昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户的邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户的手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>响应头中出现一个自动头部这是一个登录令牌</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/signup",
    "title": "用户注册",
    "version": "1.0.0",
    "name": "signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户的手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "VCode",
            "description": "<p>手机验证码  功能暂未实现</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功标识符</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息提示</p>"
          }
        ]
      }
    },
    "filename": "controller/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/userAdd",
    "title": "用户添加",
    "name": "userAdd",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户的邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户的手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>如果不输入我就需要自动生成</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>注册日期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功标识符</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/userDeleteById",
    "title": "通过id删除用户",
    "name": "userDeleteById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户在数据库的唯一标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功标识符</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/userDeleteByPhone",
    "title": "通过手机号删除用户",
    "name": "userDeleteByPhone",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户在数据库的唯一标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功标识符</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/userList",
    "title": "用户列表",
    "name": "userList",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>返回用户列表 上一次登录验证的登录名</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/userUpdate",
    "title": "用户数据更新",
    "name": "userUpdate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>修改的用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>修改的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>修改的手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>修改的email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功标识符</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息提示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userController.js",
    "groupTitle": "User"
  }
] });

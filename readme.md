| 接口             | 功能               | request                                                      | response               | 备注                                                         |
| ---------------- | ------------------ | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------ |
| /register        | 用户注册           | UserInfo                                                     |                        |                                                              |
| /login           | 用户登录           | { userName: string, password: string }                       | UserInfo               |                                                              |
| /updateAvatarUrl | 更新用户照片       | { userName: string, avatarUrl: string }                      |                        |                                                              |
| /generatePhoto   | 生成图片旅行图片   | { userName: string, style: string, cityId?: number, ptId?: string , number?: number} | { photoUrl: string[] } | ptId 存在时为加入活动时生成图片, cityId 不填; 否则为创建活动时生成图片, cityId 必填 . 响应中的photoUrl需要在后端处理 |
| /getPhoto        | 查询用户的旅行图片 | { userName: string, ptId?: string }                          | { photoUrl: string[] } | ptId 存在时为查询用户某一次活动的旅行图片, 不存在时为查询用户相关的所有旅行图片 |
| /create          | 创建图片旅行活动   | Omit<PhotoTravelInfo, 'member'>                              | { ptId: string }       |                                                              |
| /join            | 加入图片旅行活动   | { userName: string, ptId: string }                           |                        |                                                              |
| /detail          | 图片旅行活动详情   | { ptId: string }                                             | PhotoTravelInfo        |                                                              |



```typescript
type UserInfo = {
  userName: string, // 账号, 唯一
  password: string, // 密码
  avatarUrl?: string, // 个人照片
}

type PhotoTravelInfo = { 
  initiator: string, // 发起人
  photoUrl: string, // 当前活动最新合照
  cityId: string, // 城市 id
  style: string , // 风格
  member: {
    userName: string, // 成员 userName 
    timestamp: number, // 加入时间
  }[]
}
```

#### 备注

1. ptId: photo travel id
2. response 统一携带响应成功状态
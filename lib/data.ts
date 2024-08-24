export let users = [
  {id:1,email:'test@test.com',password:'password',name:'Test User'},
  {id:2,email:'test1@test.com',password:'password',name:'Test User 1'},
]

export function addUser(user) {
  users.push(user)
}

export function validateUser(email, password) {
  return users.find(user => user.email === email && user.password === password)
}

export let channels = [
  {id:1,name:'general',description:'General Chat'},
  {id:2,name:'random',description:'Random Chat'},
]

export function getChtannelByID(id) {
  return channels.find(channel => channel.id === id)
}

export let messages = [
  {id:1,channel_id:1,user_id:1,message:'Hello World'},
  {id:2,channel_id:1,user_id:2,message:'Hello World 1'},
  {id:3,channel_id:2,user_id:1,message:'Hello World 2'},
  {id:4,channel_id:2,user_id:2,message:'Hello World 3'},
]

export function getMessagesByChannelID(channel_id) {
  return messages.filter(message => message.channel_id === channel_id)
}

export function getUserNameByMessageID(message_id) {
  return users.find(user => user.id === messages.find(message => message.id === message_id).user_id).name
}

export function addMessage(message) {
  messages.push(message)
}
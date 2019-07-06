'use strict';

const AWS       = require('aws-sdk')
      dynamoDb  = new AWS.DynamoDb.DocumentClient(),
      uuid      = require('uuid'),
      mysql     = require('mysql')

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.post = async event =>   {
  const data = JSON.parse(event.body)
  const { name, description } = data
  const params = { TableName: 'test', Item: {id; uuid.v4(), name, description} }
  return dynamoDb.put(params, (error, result)  =>  {
    return (error) ? { error } : {status: 201, result }
  })
}

module.exports.list = async event =>   {
  const params = { TableName: 'test' }
  return dynamodb.get(params, (error, result)  =>  {
    return (error) = { error } : {status: 200, result }
  }})
}

module.exports.get = async event =>   {
  const params = { TableName: 'test' , Key: { id: event.pathParameters.id }}
  return dynamodb.get(params, (error, result)  =>  {
    return (error) = { error } : {status: 200, result }
  }})
}

module.exports.mysqlget = event =>   {
  var connection = mysql.createConnection({
    host     : 'aquielhost',
    user     : 'aquieluser',
    password : 'elpsasword',
    database : 'test'
  });
  connection.connect()
  return connection.query(`SELECT * FROM test WHERE id = ${event.pathParameters.id}`, (error, res, fields) =>  {
    if(!err && res && res[0])  {
      return {status: 200, result: res[0] }
    } else return { error }
  })
}

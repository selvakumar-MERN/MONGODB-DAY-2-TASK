// 1.Find all the topics and tasks which are thought in the month of October

// zen_class> db.topics.aggregate([
// ...  {
// ...       $lookup: {
// ...         from: "tasks",
// ...         localField: "topic_id",
// ...         foreignField: "topic_id",
// ...         as: "taskinfo",
// ...       },
// ...     },
// ...     {
// ...       $match: {
// ...         $and: [
// ...           {
// ...             $or: [
// ...               { topic_date: { $gt: new Date("30-sep-2020") } },
// ...               { topic_date: { $lt: new Date("1-nov-2020") } },
// ...             ],
// ...           },
// ...           {
// ...             $or: [
// ...               { "taskinfo.due_date": { $gt: new Date("30-sep-2020") } },
// ...               { "taskinfo.due_date": { $lt: new Date("1-nov-2020") } },
// ...             ],
// ...           },
// ...         ],
// ...       },
// ...     },
// ...   ])

// output:

// [
//   {
//     _id: ObjectId("649fea25e0c2043c1110a4be"),
//     topic_id: 1,
//     topic: 'Html',
//     topic_date: ISODate("2020-10-14T18:30:00.000Z"),
//     taskinfo: [
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4d7"),
//         task_id: 1,
//         topic_id: 1,
//         user_id: 1,
//         task: 'Html task',
//         due_date: ISODate("2020-09-30T18:30:00.000Z"),
//         submitted: true
//       },
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4dc"),
//         task_id: 1,
//         topic_id: 1,
//         user_id: 6,
//         task: 'Html task',
//         due_date: ISODate("2020-10-01T18:30:00.000Z"),
//         submitted: false
//       }
//     ]
//   },
//   {
//     _id: ObjectId("649fea25e0c2043c1110a4bf"),
//     topic_id: 2,
//     topic: 'Css',
//     topic_date: ISODate("2020-10-18T18:30:00.000Z"),
//     taskinfo: [
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4d8"),
//         task_id: 2,
//         topic_id: 2,
//         user_id: 2,
//         task: 'Css task',
//         due_date: ISODate("2020-10-03T18:30:00.000Z"),
//         submitted: true
//       },
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4dd"),
//         task_id: 2,
//         topic_id: 2,
//         user_id: 7,
//         task: 'Css task',
//         due_date: ISODate("2020-10-06T18:30:00.000Z"),
//         submitted: true
//       }
//     ]
//   },
//   {
//     _id: ObjectId("649fea25e0c2043c1110a4c0"),
//     topic_id: 3,
//     topic: 'Javascript',
//     topic_date: ISODate("2020-10-23T18:30:00.000Z"),
//     taskinfo: [
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4d9"),
//         task_id: 3,
//         topic_id: 3,
//         user_id: 3,
//         task: 'Javascript task',
//         due_date: ISODate("2020-10-15T18:30:00.000Z"),
//         submitted: false
//       },
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4de"),
//         task_id: 3,
//         topic_id: 3,
//         user_id: 8,
//         task: 'Javascript task',
//         due_date: ISODate("2020-10-13T18:30:00.000Z"),
//         submitted: true
//       }
//     ]
//   },
//   {
//     _id: ObjectId("649fea25e0c2043c1110a4c1"),
//     topic_id: 4,
//     topic: 'React',
//     topic_date: ISODate("2020-10-25T18:30:00.000Z"),
//     taskinfo: [
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4da"),
//         task_id: 4,
//         topic_id: 4,
//         user_id: 4,
//         task: 'React task',
//         due_date: ISODate("2020-10-20T18:30:00.000Z"),
//         submitted: true
//       },
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4df"),
//         task_id: 4,
//         topic_id: 4,
//         user_id: 9,
//         task: 'React task',
//         due_date: ISODate("2020-10-21T18:30:00.000Z"),
//         submitted: false
//       }
//     ]
//   },
//   {
//     _id: ObjectId("649fea25e0c2043c1110a4c2"),
//     topic_id: 5,
//     topic: 'NodeJs',
//     topic_date: ISODate("2020-10-28T18:30:00.000Z"),
//     taskinfo: [
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4db"),
//         task_id: 5,
//         topic_id: 5,
//         user_id: 5,
//         task: 'Node task',
//         due_date: ISODate("2020-10-27T18:30:00.000Z"),
//         submitted: true
//       },
//       {
//         _id: ObjectId("649ff2d5e0c2043c1110a4e0"),
//         task_id: 5,
//         topic_id: 5,
//         user_id: 10,
//         task: 'Node task',
//         due_date: ISODate("2020-10-28T18:30:00.000Z"),
//         submitted: true
//       }
//     ]
//   }
// ]

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020?
// zen_class> db.company_drives.find(
// ...
// ...       { drive_date: { $gte: new Date("2020-10-15T18:30:00.000Z"),
// ...       $lte: new Date("2020-10-31T18:30:00.000Z") }
// ...   }
// ... ,{_id:0,user_id:0});

// output:
// [
//   {
//     drive_date: ISODate("2020-10-17T18:30:00.000Z"),
//     company: 'cognizant'
//   },
//   {
//     drive_date: ISODate("2020-10-23T18:30:00.000Z"),
//     company: 'amazon'
//   },
//   {
//     drive_date: ISODate("2020-10-26T18:30:00.000Z"),
//     company: 'oracle'
//   },
//   { drive_date: ISODate("2020-10-27T18:30:00.000Z"), company: 'IBM' },
//   {
//     drive_date: ISODate("2020-10-28T18:30:00.000Z"),
//     company: 'microsoft'
//   },
//   { drive_date: ISODate("2020-10-29T18:30:00.000Z"), company: 'HCL' },
//   {
//     drive_date: ISODate("2020-10-30T18:30:00.000Z"),
//     company: 'salesforce'
//   }
// ]

// 3.Find all the company drives and students who are appeared for the placement.
// zen_class> db.company_drives.aggregate([
// ... {
// ...       $lookup: {
// ...         from: "users",
// ...         localField: "user_id",
// ...         foreignField: "user_id",
// ...         as: "userinfo",
// ...       },
// ...     },
// ...     {
// ...       $project: {
// ...         _id: 0,
// ...         "userinfo.name": 1,
// ...         company: 1,
// ...         drive_date: 1,
// ...         "userinfo.email": 1,
// ...         "userinfo.user_id": 1,
// ...       },
// ...     },
// ...   ]);

// output:
// [
//   {
//     drive_date: ISODate("2020-10-13T18:30:00.000Z"),
//     company: 'infosys',
//     userinfo: [ { user_id: 1, name: 'selva', email: 'selva@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-14T18:30:00.000Z"),
//     company: 'TCS',
//     userinfo: [ { user_id: 2, name: 'kumar', email: 'kumar@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-17T18:30:00.000Z"),
//     company: 'cognizant',
//     userinfo: [ { user_id: 3, name: 'viji', email: 'viji@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-23T18:30:00.000Z"),
//     company: 'amazon',
//     userinfo: [ { user_id: 4, name: 'siva', email: 'siva@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-26T18:30:00.000Z"),
//     company: 'oracle',
//     userinfo: [ { user_id: 5, name: 'karthik', email: 'karthik@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-27T18:30:00.000Z"),
//     company: 'IBM',
//     userinfo: [ { user_id: 6, name: 'vikram', email: 'vikram@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-28T18:30:00.000Z"),
//     company: 'microsoft',
//     userinfo: [ { user_id: 7, name: 'kalai', email: 'kalai@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-29T18:30:00.000Z"),
//     company: 'HCL',
//     userinfo: [ { user_id: 8, name: 'meena', email: 'meena@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-10-30T18:30:00.000Z"),
//     company: 'salesforce',
//     userinfo: [ { user_id: 9, name: 'vijay', email: 'vijay@gmail.com' } ]
//   },
//   {
//     drive_date: ISODate("2020-11-01T18:30:00.000Z"),
//     company: 'Facebook',
//     userinfo: [ { user_id: 10, name: 'ajith', email: 'ajith@gmail.com' } ]
//   }
// ]

// 4.Find the number of problems solved by the user in codekata?
// zen_class> db.codekata.aggregate([
// ...  {
// ...       $lookup: {
// ...         from: "users",
// ...         localField: "user_id",
// ...         foreignField: "user_id",
// ...         as: "userinfo",
// ...       },
// ...     },
// ...     {
// ...       $project: {
// ...         _id: 0,
// ...         user_id: 1,
// ...         problems: 1,
// ...         "userinfo.name": 1,
// ...       },
// ...     },
// ...   ]);

// output:
// [
//   { user_id: 1, problems: 180, userinfo: [ { name: 'selva' } ] },
//   { user_id: 2, problems: 125, userinfo: [ { name: 'kumar' } ] },
//   { user_id: 3, problems: 87, userinfo: [ { name: 'viji' } ] },
//   { user_id: 4, problems: 70, userinfo: [ { name: 'siva' } ] },
//   { user_id: 5, problems: 87, userinfo: [ { name: 'karthik' } ] },
//   { user_id: 6, problems: 250, userinfo: [ { name: 'vikram' } ] },
//   { user_id: 7, problems: 140, userinfo: [ { name: 'kalai' } ] },
//   { user_id: 8, problems: 420, userinfo: [ { name: 'meena' } ] },
//   { user_id: 9, problems: 350, userinfo: [ { name: 'vijay' } ] },
//   { user_id: 10, problems: 170, userinfo: [ { name: 'ajith' } ] }
// ]

// 5.Find all the mentors with who has the mentee's count more than 15?
// zen_class> db.mentors.find(
// ...
// ...       { mentee_count: { $gte: 15 }
// ...   }
// ... ,{_id:0,mentor_id:0,mentee_count:0});

// output:
// [
//   { mentor_name: 'siva', mentor_email: 'siva@gmail.com' },
//   { mentor_name: 'farook', mentor_email: 'farook@gmail.com' },
//   { mentor_name: 'pugal', mentor_email: 'pugal@gmail.com' },
//   { mentor_name: 'tamil', mentor_email: 'tamil@gmail.com' },
//   { mentor_name: 'roopesh', mentor_email: 'roopseh@gmail.com' },
//   { mentor_name: 'tilak', mentor_email: 'tilak@gmail.com' }
// ]

// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
// db.attendance.aggregate([
//     {
//       $lookup: {
//         from: "topics",
//         localField: "topic_id",
//         foreignField: "topic_id",
//         as: "topics",
//       },
//     },
//     {
//       $lookup: {
//         from: "tasks",
//         localField: "topic_id",
//         foreignField: "topic_id",
//         as: "tasks",
//       },
//     },
//     { $match: { $and: [{ attended: false }, { "tasks.submitted": false }] } },
//     {
//       $match: {
//         $and: [
//           {
//             $or: [
//               { "topics.topic_date": { $gte: new Date("15-oct-2020") } },
//               { "topics.topic_date": { $lte: new Date("31-oct-2020") } },
//             ],
//           },
//           {
//             $or: [
//               { "tasks.due_date": { $gte: new Date("15-oct-2020") } },
//               { "tasks.due_date": { $lte: new Date("31-oct-2020") } },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       $count: "No_of_students_absent",
//     },
//   ]);


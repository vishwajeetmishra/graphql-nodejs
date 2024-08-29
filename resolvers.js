const db = require('./db');
const Query = {
    greeting: () => "Welcome User",
    students: () => db.students.list(),
    studentById:(root,args,context,info) => {       
		return db.students.get(args.id);    
	} 
}

const Mutation = {
    addStudent:(root,args,context,info) => {
        return db.students.create({collegeId:args.collegeId,       
            firstName:args.firstName,       
            lastName:args.lastName})
    }
}

module.exports = {Query,Mutation}
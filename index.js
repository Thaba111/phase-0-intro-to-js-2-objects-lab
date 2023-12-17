// Write your solution in this file!

//1. Returns an employee with the original key-value pairs and the new key-value pair:
lexpect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
    name: 'Sam',
    streetAddress: '11 Broadway'
  });
  

  // 2. Does not modify the original employee, but rather returns a clone with the new data:
  updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
expect(employee['streetAddress']).to.equal(undefined);

  
  //3. destructivelyUpdateEmployeeWithKeyAndValue
  expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
    name: 'Sam',
    streetAddress: '12 Broadway'
  });
  expect(employee).to.eql({
    name: 'Sam',
    streetAddress: '12 Broadway'
  });
  
  
  // 4. deleteFromEmployeeByKey
  let newEmployee = deleteFromEmployeeByKey(employee, 'name');
  expect(newEmployee['name']).to.equal(undefined);
  expect(typeof newEmployee).to.equal('object');
  
  
  //5. Does not modify the original employee (it is non-destructive):
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  //6. destructivelyDeleteFromEmployeeByKey Tests:
//Returns an employee without the deleted key/value pair:
let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
expect(newEmployee['name']).to.equal(undefined);

//7. Modifies the original employee:
let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
expect(employee['name']).to.equal(undefined);
expect(employee).to.equal(newEmployee);


  

  
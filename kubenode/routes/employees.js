const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// submit employee details
router.post('/', (req, res) => {
    // todo - skipping request body validation for brevity

    // creating employee obj
    let employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        phone_number: req.body.phone_number
    });

    employee.save()
        .then((response) => {
            res.status(201).json({ 'message': response });
        }).catch(err => {
            res.status(500).json({ 'message': err });
        });
});

// get back all employees
router.get('/', (req, res) => {
    Employee.find()
        .then(response => {
            res.status(200).json({ 'message': response });
        }).catch(err => {
            res.status(500).json({ 'message': err });
        });
});

// get back a single employee
router.get('/:id', (req, res) => {
    console.log('Searching id = %s', req.params.id);
    Employee.findById(req.params.id)
        .then(response => {
            if (!response) {
                res.status(404).json({ 'message': 'Resource not found' });
            } else {
                res.status(200).json({ 'message': response });
            }
        }).catch(err => {
            res.status(500).json({ 'message': err });
        });
});

// delete all employees
router.delete('/', (req, res) => {
    Employee.deleteMany()
        .then(response => {
            res.status(200).json({ 'message': response });
        }).catch(err => {
            res.status(500).json({ 'message': err });
        });
});

// delete an employee
router.delete('/:id', (req, res) => {
    console.log('Deleting id = %s', req.params.id);

    // todo - skipping find-by-id validation for brevity

    Employee.deleteOne({ _id: req.params.id })
        .then(response => {
            res.status(200).json({ 'message': response });
        }).catch(err => {
            res.status(500).json({ 'message': err });
        });
});

// update an employee
router.patch('/:id', (req, res) => {
    console.log('Updating id = %s', req.params.id);

    // todo - skipping find-by-id validation for brevity

    Employee.updateOne(
        { _id: req.params.id },
        { $set: { phone_number: req.body.phone_number } })
        .then(response => {
            res.status(204).json({ 'message': response });
        }).catch(err => {
            res.status(500).json({ 'message': err });
        });
});

module.exports = router;
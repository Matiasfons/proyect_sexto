const express = require("express");
const router = express.Router();
const mysql = require('mysql2');
var jwt = require('jsonwebtoken');
const dbConnection = require("../../helpers/db/database");
const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});
const axios = require('axios');
const cheerio = require('cheerio');

router.post('/chat', async function (req, res) {
    try {
        const { message } = req.body;

        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo',
        });

        //RESPONSE
        res.json({
            "code": 200,
            "data": completion
        })
    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});


router.get('/scrap', async function (req, res) {
    try {
        const cookies = [
            '1P_JAR=2023-08-10-22',
            'MoodleSession=09ipugacv8bd1sq38rghdhm1gs'
        ];

        const headers = {
            Cookie: cookies.join('; ')
        };

        axios.get('https://uniandesonline.edu.ec/my/', { headers })
            .then(response => {
                const htmlContent = response.data;
                // Load the HTML content using Cheerio
                const $ = cheerio.load(htmlContent);

                // Select the elements containing task information
                const taskElements = $('div[data-region="event-list-item"]');

                // Initialize an array to store the extracted tasks
                const tasks = [];

                // Iterate through each task element and extract relevant information
                taskElements.each((index, element) => {
                    const task = {};

                    // Extract task title
                    task.title = $(element).find('h6.text-truncate').text();

                    // Extract task course
                    task.course = $(element).find('small.text-muted').text();

                    // Extract task due time
                    task.dueTime = $(element).find('small.text-right').text();

                    // Extract task link
                    task.link = $(element).find('a').attr('href');

                    // Add the extracted task to the tasks array
                    tasks.push(task);
                });

                // Print the extracted tasks
                console.log(tasks);
                res.json({
                    "code": 404,
                    "data": "element"
                })
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});




module.exports = router;


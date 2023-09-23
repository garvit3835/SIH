const { spawn } = require('child_process');

// Replace with the actual path to your FaceDetection.py script
const pythonScriptPath = './ML/FaceDetection.py';

// Replace 'arnav' with the desired argument for your Python script
const pythonArgs = ['arnav'];

// Spawn a child process to run the Python script
const pythonProcess = spawn('python', [pythonScriptPath, ...pythonArgs]);

// Listen for data from the Python script (stdout and stderr)
pythonProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

pythonProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

// Listen for the Python script to exit
pythonProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Python script successfully executed.');
  } else {
    console.error(`Python script exited with code ${code}.`);
  }
});

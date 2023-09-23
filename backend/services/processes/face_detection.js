const { spawn } = require("child_process");

const face_detection = (d_id) => {
  return new Promise((resolve, reject) => {
    const pythonScriptPath = "./ML/FaceDetection.py";
    const pythonArgs = [d_id];
    const pythonProcess = spawn("python", [pythonScriptPath, ...pythonArgs]);

    let pythonOutput = "";

    pythonProcess.stdout.on("data", (data) => {
      pythonOutput += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(data.toString());
    });

    pythonProcess.on("close", (code) => {
      if (code === 0) {
        resolve(pythonOutput.trim());
      } else {
        reject(`Python script exited with code ${code}.`);
      }
    });
  });
};

module.exports = face_detection;

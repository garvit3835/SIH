import face_recognition
import numpy as np
import cv2
import time
import os

# Initialize some variables
face_locations = []
face_encodings = []
face_names = []
process_this_frame = True

known_face_encodings = []
    
known_face_names = []

def face_recong(Doctor_name):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    image_path = os.path.join(script_dir, "Doctors", "{}.jpg".format(Doctor_name))
    image = face_recognition.load_image_file(image_path)

    face_encoding = face_recognition.face_encodings(image)[0]

    known_face_encodings.append(face_encoding)
    known_face_names.append(Doctor_name)

face_recong("arnav")
face_recong("bradley")

def find(id, timeout=10):  # Set a timeout of 10 seconds
    video_capture = cv2.VideoCapture(0)
    check = False
    last_print_time = 0  # Initialize the last print time
    start_time = time.time()  # Record the start time
    
    while not check:
        # Grab a single frame of video
        ret, frame = video_capture.read()

        # Resize frame of video to 1/4 size for faster face recognition processing
        # small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
        small_frame = frame
        process_this_frame = True
        if process_this_frame:
            # Find all the faces and face encodings in the current frame of video
            face_locations = face_recognition.face_locations(small_frame)
            face_encodings = face_recognition.face_encodings(small_frame, face_locations)

            face_names = []
            for face_encoding in face_encodings:
                # See if the face is a match for the known face(s)
                matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
                name = "Unknown"

                face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = known_face_names[best_match_index]

                if name == id:
                    check = True

        current_time = time.time()
        if current_time - start_time >= timeout:
            break

    return check

test = find("arnav")
print(test)

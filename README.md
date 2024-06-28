For the SQL DB:

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagePath VARCHAR(255)
);



CREATE TABLE scripts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scriptName VARCHAR(255),
    downloadLinks TEXT,
    lastUpdate DATE,
    developer VARCHAR(255),
    imageId INT,
    FOREIGN KEY (imageId) REFERENCES images(id)
);

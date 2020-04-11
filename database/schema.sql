CREATE TYPE Communicators AS ENUM ('email', 'slack');

CREATE TABLE Users_data(
        User_id SERIAL PRIMARY KEY ,
        Email VARCHAR(255) NOT NULL UNIQUE CHECK (email = '%@%.%'),
        User_password VARCHAR(128) NOT NULL CHECK (user_password > 'poprawnehaslo')
        );

CREATE TABLE Links(
        Link_id SERIAL PRIMARY KEY,
        Url_address VARCHAR(2048) NOT NULL,
        Description VARCHAR(1000),
        User_id SERIAL,
        CONSTRAINT fk_LinksUser_data FOREIGN KEY (user_id) REFERENCES Users_data(user_id)
        );

CREATE TABLE Scripts(
        Script_id SERIAL PRIMARY KEY,
        Instructions TEXT NOT NULL,
        Link_id SERIAL,
        CONSTRAINT fk_ScriptLinks FOREIGN KEY (link_id) REFERENCES Links(link_id)
        );

CREATE TABLE Notifications(
        Notification_id SERIAL PRIMARY KEY,
        Address VARCHAR(255),
        Communicator Communicators NOT NULL,
        Script_id SERIAL,
        CONSTRAINT fk_NotificationScript FOREIGN KEY (script_id) REFERENCES Scripts(script_id)
        );


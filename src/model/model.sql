CREATE TABLE people(
    person_id serial PRIMARY KEY,
    person_name varchar(100) not null,
    person_job varchar(64) not null,
    person_age int not null
);
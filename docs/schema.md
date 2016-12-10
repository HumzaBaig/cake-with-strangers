# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
is_host         | boolean   | not null, default: false
profile         | text      |
profile_pic_url | string    |
city_id         | integer   | foreign key (host's location), indexed

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
state       | string    |
country     | string    | not null
lat         | float     | not null
lng         | float     | not null

## events
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
date_and_time | datetime  | not null
address       | string    | not null
limit         | integer   | not null
host_id       | integer   | not null, foreign key (references host), indexed (should be current user)
city_id       | integer   | not null, foreign key (references city), indexed (should be current user's city)
description   | text      |
lat           | float     |
lng           | float     |

## attendances
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
attendee_id | integer   | not null, foreign key (references attendee), indexed
event_id    | integer   | not null, foreign key (references event), indexed

**Note:** The combination of user_id and event_id should be unique

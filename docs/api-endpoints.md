# API Endpoints

## HTML API

### Root

- `GET /` - loads the initial page

## JSON API

### Users

- `POST /api/users`
	- Creates new user
- `PATCH /api/users`
	- Updates user
- `DELETE /api/users/:id`
	- Deletes user

### Session

- `POST /api/session`
	- Logs in
- `DELETE /api/session`
	- Logs out
- `GET /api/session`

### Cities

- `GET /api/cities`
  - Cities index
- `GET /api/cities/:id`
  - A city's Show page 

### Events

- `GET /api/cities/:id/events`
  - List of all of the events of a city
- `POST /api/cities/:id/events`
  - Creates an event
- `PATCH /api/cities/:id/events/:id`
  - Updates an event
- `DELETE /api/cities/:id/events/:id`
  - Cancels an event

### Hosts

- `GET /api/cities/:id/hosts`
  - List of all of the hosts of a city
- `POST /api/cities/:id/hosts`
  - Level up user
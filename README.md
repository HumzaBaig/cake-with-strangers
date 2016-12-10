# LetsGetCake

[LetsGetCake live][heroku]

[heroku]: http://www.letsgetcake.herokuapp.com

LetsGetCake is a full-stack web application inspired by TeaWithStrangers.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Choosing a City

  On the database side, the cities are stored in one table in the database, which contains columns for `id`, `name`, `state`, `country`, and `pic_url`.  Depending on whether logged in or not, the user is able to head straight to the city index page or

  the city's detail page of their home-city. From there they are able to change their home-city.

![image of cities index](wireframes/cities_page.png)

### Events

Implementing Events started with a events table in the database.  The `Event` table contains many columns: `description`, `id`, `address`, and `date_and_time`.

The React component structure for events mirrored that of events: the `CitiesIndex` component renders a list of `Events` and `Hosts` as subcomponents. These render all upcoming events and current hosts in the current city.

`CitiesIndex` render method:

```javascript
render() {
  return(
    <div className="city-details-page">
      <section className="center">
        <div className="city-detail-container">
          {this.loggedInButton()}
          <h2>HOSTS</h2>
          {this.hostElements()}
        </div>
      </section>
    </div>
  );
}
```

### Hosts

As with events, hosts are stored in the database through the `user` table.  The `user` table contains the columns `id`, `fname`, `lname`, `username`, `email`, and everything for User Authentication.

As a host, the User is able to head to the hosting page, and create `Events` for their home city.

![tag screenshot](wireframes/hosting_page.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for LetsGetCake are outlined below.

### More API Integration

Since their are locations involved with this application, A google maps API integration is definitely going to be necessary. Users will be able to enter in addresses, and see exactly where, latitude and longitude-wise, the event is being held.

Another API that is in future plans is the Yelp API for users to help users decide whether they would like the cake at the location of the event.

### Smart-Feature

Through adding tags to the events, hosts, and cities tables, the web application will be able to see which tags represent you best, and recommend which events you might prefer.

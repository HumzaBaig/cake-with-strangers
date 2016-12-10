{
  session: {
    currentUser: {
      id: 1,
      username: "johndoe123",
      is_host: false
    },
    errors: []
  },
  forms: {
    eventForm: {
      errors: [] => handles validations
    }
  },
  cities : {
    id: 1,
    name: "San Francisco",
    state: "CA",
    country: "USA",
    hosts: {
      1: {
        username: "THEhost",
        first_name: "Humza",
        profile: "Description description",
        pic_url: "hostspicture/3322",
        city_id: 1
      }
    },
    events: {
      1: {
        id: 1,
        date: "20161030",
        time: "14:00:00 PDT",
        address: "321 bakeryplace, San Francisco, CA",
        limit: 10,
        description: "Let's get together!",
        city_id: 1,
        host_id: 2
      }
    }
  },
  events: {
    attendingEvents: {
      1: {
        id: 1,
        date: "20161030",
        time: "14:00:00 PDT",
        address: "321 bakeryplace, San Francisco, CA",
        limit: 10,
        description: "Let's get together!",
        city_id: 1,
        host_id: 2,
        attendees: [4, 9]
      }
    },
    hostedEvents: {
      3: {
        id: 2
        date: "20161124",
        time: "12:30:00 PDT",
        address: "2332 cafe layal, San Francisco, CA",
        limit: 5,
        description: "We should get to know each other better",
        city_id: 2,
        host_id: 12,
        attendees: [2, 5, 7]
      }
    }
  }
  users: {
    host: {
      1: {
        id: 1,
        username: "JohnnySimmons",
        is_host: true,
      }
    }
  }
}

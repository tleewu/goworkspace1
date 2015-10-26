# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Workspace.create!({name: 'Koala Tea', lat: 34.062492, lng: -118.447672, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Bean Bag', lat: 37.775010, lng: -122.437842, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Starbucks', lat: 39.276736, lng: -76.830851, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Starbucks', lat: 34.062478, lng: -118.447450, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "1:00:00", weekday_closing:
                  "1:00:01", weekend_opening: "1:00:00", weekend_closing: "1:00:01"})

Workspace.create!({name: 'In N Out', lat: 34.063100, lng: -118.448062, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Iso Fusion Cafe', lat: 34.059885, lng: -118.446156, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "1:00:00", weekday_closing:
                  "1:00:01", weekend_opening: "1:00:00", weekend_closing: "1:00:01"})
Workspace.create!({name: 'Chick Fil A', lat: 34.063494, lng: -118.445011, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Cocos', lat: 34.063505, lng: -118.445741, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "1:00:00", weekday_closing:
                  "1:00:01", weekend_opening: "1:00:00", weekend_closing: "1:00:01"})
Workspace.create!({name: 'Powell Library', lat: 34.072949, lng: -118.443176, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Biomed', lat: 34.065837, lng: -118.443646, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "1:00:00", weekday_closing:
                  "1:00:01", weekend_opening: "1:00:00", weekend_closing: "1:00:01"})
Workspace.create!({name: 'Midvale Apt 324', lat: 34.067373, lng: -118.452739, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Coffee Bean', lat: 34.061611, lng: -118.448082, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "1:00:00", weekday_closing:
                  "1:00:01", weekend_opening: "1:00:00", weekend_closing: "1:00:01"})
Workspace.create!({name: 'Coffee Bean', lat: 34.062492, lng: -118.447672, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Coffee Bean', lat: 34.062810, lng: -118.444946, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "1:00:00", weekday_closing:
                  "1:00:01", weekend_opening: "1:00:00", weekend_closing: "1:00:01"})
Workspace.create!({name: 'Charles E. Young Library', lat: 34.074971, lng: -118.441438, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Chipotle', lat: 34.061021, lng: -118.446273, overall: 1,
                   wifi: 1, power: 1, seating: 1, weekday_opening: "1:00:00", weekday_closing:
                  "1:00:01", weekend_opening: "1:00:00", weekend_closing: "1:00:01"})

Image.create!({url: "http://i.imgur.com/ElsMe71.png",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://fooddouche.files.wordpress.com/2015/04/img_2219.jpg?w=490",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://s3-media1.fl.yelpcdn.com/bphoto/c5qCq3fUeRJq1we8ufAQMA/ls.jpg",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://s3-media3.fl.yelpcdn.com/bphoto/2YG2rOrXNrH8b-xLXK8NgA/ls.jpg",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://s3-media1.fl.yelpcdn.com/bphoto/jNjM0bXkJWdkHny5iLJyVg/o.jpg",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://s3-media1.fl.yelpcdn.com/bphoto/jNjM0bXkJWdkHny5iLJyVg/o.jpg",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://s3-media1.fl.yelpcdn.com/bphoto/jNjM0bXkJWdkHny5iLJyVg/o.jpg",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://s3-media1.fl.yelpcdn.com/bphoto/c5qCq3fUeRJq1we8ufAQMA/ls.jpg",
              imageable_type: "Workspace", imageable_id: 1})
Image.create!({url: "https://s3-media3.fl.yelpcdn.com/bphoto/2YG2rOrXNrH8b-xLXK8NgA/ls.jpg",
              imageable_type: "Workspace", imageable_id: 1})

User.create!({email: "guest@guest.com", password_digest: BCrypt::Password.create("password"), first_name: "Theo", last_name: "Wu",
              location: "San Francisco, CA"})

# Workspace
Workspace is a crowdsourcing platform that connects people to the best cafes and workspaces around them. This web application is built with Ruby on Rails and React.js.

Check it out live @ https://www.gowork.space

I'd love to hear your suggestions and thoughts!

### Main Functionality
* Search for workspaces by name and by location
* Filter search results by wifi, outlets, pricing, seating, and open now
* Submit reviews and interactively rate workspaces
* Learn more about particular workspaces through crowd-sourced reviews

### Additional Functionality
* Google Maps API integration
* React.js consuming a RESTful JSON API and following a Flux architecture
* Cloudinary API to upload profile pictures for users
* Interactive ways to rate workspaces through React components
* Polymorphic 'Imageable' associations
* Ruby script to make Yelp API call and seed database
```
class String
  def remove_bad_characters
    self.gsub!('\n', '')
    self.gsub!("'", '')
    self
  end
end

...

seed_data += "Workspace.create!({name: '" + workspace.name.remove_bad_characters +
                             "', lat: " + workspace.location.coordinate.latitude.to_s +
                             ", lng: " + workspace.location.coordinate.longitude.to_s +
                             ", street_address: '" + (workspace.location.display_address[0] || '') +
                             "', city_address: '" + (workspace.location.display_address[2] || '') +
                             "', overall: " + workspace.rating.to_s +
                             ", wifi: " + rand(1..5).to_s +
                             ", power: " + rand(1..5).to_s +
                             ", seating: " + rand(1..5).to_s +
                             ", pricing: " + rand(1..5).to_s +
                             ", weekday_opening: '" + rand(7..11).to_s +
                      ":00:00', weekend_opening: '" + rand(7..11).to_s +
                      ":00:00', weekday_closing: '" + rand(16..23).to_s +
                      ":00:00', weekend_closing: '" + rand(16..23).to_s +
                      ":00:00', profile_image_url: '" + workspace.image_url +
                              "'}) \n"
```
* The Filter Store listens to a variety of change listeners, ranging from when a user wants to sort by wifi ratings to when a user wants to search in a new location. Here is the initial state of a filter store.

```
var _filters = { workspaceName: null,
                bounds: {},
                wifi: false,
                openNow: false,
                seating: false,
                overall: false,
                power: false,
                pricing: false,
                currentSet: 0
              };
```
* Whenever the filter store changes, the SearchResultsIndex component will use the filters in the filter store to make an API call to the Rails backend, simplifying the structure of the application.
```
queryForWorkspaces: function () {
  var filters = FilterStore.all();
  ApiUtil.fetchAllWorkspaces(filters);
}
```

### Features to be Implemented
* Allow users to upload images for workspaces in their reviews
* Animate the Google Maps markers. When hovering over a workspace, the Google Maps marker will bounce. The markers will be numbered by its search result order.
* Show the distance from the queried location on search results.

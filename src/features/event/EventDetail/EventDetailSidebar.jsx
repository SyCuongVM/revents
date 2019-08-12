import React from 'react';
import { Segment, List, Label, Item, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const EventDetailSidebar = ({attendees}) => {
  return (
    <div>
      <Segment textAlign="center" style={{border: 'none'}} attached="top" secondary inverted color="teal">
        {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees && attendees.map(attendee => (
            <Item key={attendee.id} style={{position: 'relative'}}>
              {attendee.host &&
                <Label style={{position: 'absolute'}} color="orange" ribbon="right">Host</Label>
              }
              <Grid>
                <Grid.Column width={6}>
                  <Item.Image size="mini" src={attendee.photoURL} />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Item.Content verticalAlign="middle">
                    <Item.Header as="h3">
                      <Link to={`/profile/${attendee.id}`}>{attendee.displayName}</Link>
                    </Item.Header>
                  </Item.Content>
                </Grid.Column>
              </Grid>
            </Item>
          ))}
        </List>
      </Segment>
    </div>
  );
};

export default EventDetailSidebar;
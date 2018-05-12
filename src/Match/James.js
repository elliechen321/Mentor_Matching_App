import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://nogenbeckheadshots.com/wp-content/uploads/2017/11/LA_ACTOR_HEADSHOTS_PHOTOGRAPHER_HEADSHOT_8478-1.jpg'}} />
                <Body>
                  <Text>James</Text>
                  <Text note>Director Of Technology</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6I11JjCBv0S3gmESZPP8LPnwKvIP_qK_Ip2F3s6ck3EknifUZA'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <Text> Industry: Web </Text>
            <Text></Text>
               <Text> Github: www.github.com/James 10</Text>
               <Text></Text>
                  <Text> LinkedIn: www.linkedin.com/James</Text>
                  <Text></Text>
                     <Text> Website: James.com</Text>
                     <Text></Text>
                        <Text> Years Of Experience: 7</Text>
                        <Text></Text>
                           <Text> In hac habitasse platea dictumst. Praesent ut nisl sem. Quisque justo nisi, condimentum a scelerisque vel, blandit fermentum nunc. Nullam vel fringilla turpis, sit amet aliquet enim. Nunc gravida imperdiet fermentum. Ut cursus diam nec mauris tristique, eu vulputate eros gravida. Aenean felis tortor</Text>
                           <Text></Text>
                              <Button primary><Text> Request Match </Text></Button>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>73 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
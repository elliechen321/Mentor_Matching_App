import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
Title, Grid, Row, Col} from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Matches</Title>User
          </Body>
          <Right />
        </Header>
        <Content>
          <Grid>
            <Col style={{ width: 200}}>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200} } >
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>
            

            </Row>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            </Col>

            <Col style={{   width: 200}}>
            <Row style={{borderWidth:3,  height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            <Row style={{  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>

            </Row>
            </Col>
          </Grid>
        </Content>Row
      </Container>
    );
  }
}
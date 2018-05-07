import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
Title, Grid, Row, Col} from 'native-base';
export default class CardImageExample extends Component {
   constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

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
        <Button full rounded dark style={{ marginTop: 30 }}>
            <Text>Refresh</Text>
          </Button>
          <Grid>
            <Col style={{ width: 200}}>
            <Row style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200} } >
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>
            <CardItem header bordered>
              <Text>Developer</Text>
            </CardItem>
            </Row>

            <Row rounded style={{  borderWidth:3,  height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>
            <CardItem header bordered>
              <Text>Developer</Text>
            </CardItem>
            </Row>

            <Row rounded style={{  borderWidth:3,  borderWidth:3, height: 200, width: 200}}>
            <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
            <Text>User</Text>
            <CardItem header bordered>
              <Text>Developer</Text>
            </CardItem>
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

            </Col>

          </Grid>
        </Content>Row
      </Container>
    );
  }
}
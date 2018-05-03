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
            <Title>Matches</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', width: 200}}>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200} } ></Row>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            </Col>

            <Col style={{ backgroundColor: '#00CE9F',  width: 200}}>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#635DB7', height: 200, width: 200}}></Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 200, width: 200}}></Row>
            </Col>
          </Grid>
        </Content>Row
      </Container>
    );
  }
}
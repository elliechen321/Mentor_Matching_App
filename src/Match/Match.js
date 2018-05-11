import axios from 'axios';
import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
  Title, Grid, Row, Col, ListView, RefreshControl
} from 'native-base';
import { UltimateRefreshView } from "react-native-ultimate-listview";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myKey: null,
      matches: []
    }
  }

  componentDidMount() {
    axios.get('http://10.55.110.251:3000/api/all').then(res => {
      console.log(res.data)

      this.setState({
        matches: res.data
      });
    })
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
            <Title>Matches</Title>
          </Body>
          <Right />
        </Header>
        <UltimateRefreshView onRefresh={this.onRefresh}>
          <Content>
            <Text> Pull To Refresh </Text>
            <Grid>
              {/* <Col style={{ width: 200 }}> */}
                {this.state.matches.map((match, i) => (
                  <Row rounded key={i} style={{ borderWidth: 3, height: 200 }} onPress={this.navigation}>
                    <Thumbnail source={ { uri: match.img } } />
                    <Text>{match.fullName}</Text>
                    <CardItem header bordered>
                      <Text>{match.industry}</Text>
                    </CardItem>
                  </Row>
                ))}

                
              {/* </Col> */}
            </Grid>
          </Content>Row
        </UltimateRefreshView>
      </Container>

    );
  }

}

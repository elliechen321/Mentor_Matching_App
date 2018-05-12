import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
Title, Grid, Row, Col, ListView, RefreshControl} from 'native-base';
import {UltimateRefreshView} from "react-native-ultimate-listview";
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
            <Col style={{ width: "100%"}}>
            <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("OscarProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/MFettes-headshot.jpg'}} />
                <Body>
                  <Text>Oscar</Text>
                  <Text note>Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H8WuRINimqur8ud/technology-background-gear_rhfg-imn_thumbnail-full01.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>51 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>4h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

             <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("LeslieProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://static.showit.co/400/1CRbtw9JTyWwp3WhRHFoBQ/63035/headshots_actors-13.jpg'}} />
                <Body>
                  <Text>Leslie</Text>
                  <Text note>Data Web Designer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.imgur.com/Nbi7bYI.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>22 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("PeterProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://kellywilliamsphotography.com/wp-content/uploads/2015/08/Corporate-Headshot-Dallas-TX-1-1024x683.jpg'}} />
                <Body>
                  <Text>Peter</Text>
                  <Text note>Senior Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://wallpapertag.com/wallpaper/full/1/a/1/350829-widescreen-website-background-1920x1080-windows-xp.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>17 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("JamesProfile")}
            >
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
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("JessicaProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://static1.squarespace.com/static/572e050c4d088ea3a8f0ac9d/t/587451909de4bb0b7ed2f185/1484018070394/Acting+Headshots+Atlanta-2001.jpg?format=1500w'}} />
                <Body>
                  <Text>Jessica</Text>
                  <Text note>Front End Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://p.motionelements.com/stock-video/video-backgrounds/me7135943-abstract-black-white-web-background-loop-4k-4096x2304-a0120.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>82 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>9h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("MichaelProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://liketherazor.com/wp-content/uploads/2014/08/2_Jordan-Ogletree-Chris-Gillett-Houston-Headshot-Photographer.jpg'}} />
                <Body>
                  <Text>Michael</Text>
                  <Text note>Senior Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://managementsystems.fi/wp-content/uploads/2014/05/1360103186_abstract-green-nature-web-background.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>24 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>7h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("MeganProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://liketherazor.com/wp-content/uploads/2014/08/1_Victoria-Jordan_Chris-Gillett-Houston-Headshot-Photographer.jpg'}} />
                <Body>
                  <Text>Megan</Text>
                  <Text note>Marketing</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/8LQSe_1D27I/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>102 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("JustinProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://thumbs.dreamstime.com/b/headshot-happy-man-28438140.jpg'}} />
                <Body>
                  <Text>Justin</Text>
                  <Text note>Data Analyst</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://topbackgroundwallpaper.com/wp-content/uploads/2018/01/web-design-wallpaper-background-wallpaper-colorful-web-background-stunning-yvaine-design-1270701.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>31 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>5h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("AudreyProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.smartheadshots.com/blog/photos/actor-headshots-1283.jpg'}} />
                <Body>
                  <Text>Audrey</Text>
                  <Text note>Web Designer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>

               <Row style={{height: 400, width: "100%"} } 
            onPress={() => this.props.navigation.navigate("StephanieProfile")}
            >
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'}} />
                <Body>
                  <Text>Stephanie</Text>
                  <Text note>Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSvBb2bnNrY-TYe-r-lU0Ap2c4ZBx8PVF4REL2EtQ2eT1zYhc'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>73 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>8h ago</Text>
              </Right>
            </CardItem>
          </Card>
            </Row>
            </Col>


          </Grid>
        </Content>Row
        </Container>

           
    );
  }

}


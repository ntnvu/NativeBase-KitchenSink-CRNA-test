import React, {Component} from "react";

import FloatingLabel from "../form/floatingLabel";
import NHListAvatar from "../list/list-avatar";
import NHListDivider from "../list/list-divider";

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Footer,
    FooterTab,
    Text,
    Body,
    Left,
    Right,
    Icon
} from "native-base";

import styles from "./styles";

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false
        };
    }

    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false
        });
    }

    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false
        });
    }

    toggleTab3() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false
        });
    }

    toggleTab4() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true
        });
    }

    render() {
        let AppComponent  = NHListAvatar;
        if (this.state.tab1) {
            AppComponent = FloatingLabel
        }
        if (this.state.tab2) {
            AppComponent = NHListAvatar
        }
        if (this.state.tab3) {
            AppComponent = NHListDivider
        }
        if (this.state.tab4) {
            AppComponent = FloatingLabel
        }
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                    <Title>App</Title>

                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <AppComponent />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                            <Text>Register/Login</Text>
                        </Button>
                        <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                            <Text>Messages</Text>
                        </Button>
                        <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
                            <Text>Contacts</Text>
                        </Button>
                        <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Basic;

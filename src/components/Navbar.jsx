import React from 'react';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  margin-bottom: 5px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  height: 60px;
  margin-top: 5px;
  ${mobile({ width: "80%", height: "80%", marginTop: "-5px", marginLeft: "15px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 10px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <Search style={{ color: "gray", fontSize: 16 }} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo src='/img/clrlogo.png' />
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <Link to='/cart'>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
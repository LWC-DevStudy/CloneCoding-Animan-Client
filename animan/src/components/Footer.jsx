// LIBRARY
import React from 'react';

// STYLE
import styled from 'styled-components';

// ICON
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Footer() {
  return (
    <React.Fragment>
      <FooterStyle>
        <FooterText style={{ fontWeight: '800' }}>
          ANIMAN NATURAL PET FOOD
        </FooterText>

        <FooterText>
          Copyright ⓒ 2021 애니먼 협동조합 All rights reserved.
        </FooterText>
        <FooterIconWrap>
          <InstagramIcon
            style={{ marginRight: '10px', width: '15px', height: '15px' }}
          />
          <FacebookIcon
            style={{ marginRight: '10px', width: '15px', height: '15px' }}
          />
          <ChatBubbleOutlineIcon
            style={{ marginRight: '10px', width: '15px', height: '15px' }}
          />
          <YouTubeIcon
            style={{ marginRight: '10px', width: '15px', height: '15px' }}
          />
        </FooterIconWrap>
        <FooterText>
          Tel. : 070 8098 8658 | Email : animan070@gmail.com
        </FooterText>
        <FooterText>
          대구광역시 남구 명덕로 228-6, 3층 203호 (이천동)
        </FooterText>
        <FooterText>사업자 등록번호 : 238 86 01044</FooterText>
        <FooterText>국민은행 애니먼 협동조합 612901 04 258931</FooterText>

        <FooterText>
          대표자명 : 강혁주 | 통신판매 신고번호 : 제 2020-대구남구-0608 호
        </FooterText>
      </FooterStyle>
    </React.Fragment>
  );
}

const FooterStyle = styled.footer`
  background: rgb(${(props) => props.theme.palette.footerColor});
  width: 100%;
  color: white;
  height: 25vh;
  padding: 2% 0 3% 0;
  text-align: center;
`;

const FooterText = styled.p`
  color: white;
  font-size: 12px;
  line-height: 1;
  font-weight: 350;
`;

const FooterIconWrap = styled.p`
  color: white;
`;

export default Footer;

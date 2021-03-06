import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";

const TitleText = styled.div`
  font-size: ${typography.subTitle};
  font-weight: ${fonts.montserrat.bold};
  color: ${colors.body};
`;

const SubTitleText = styled.div`
  font-size: ${typography.subTitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
  margin-top: 179px;

  @media only screen and (max-width: 640px) {
    font-size: 25px;
  }
`;
const InputLabelText = styled.p`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;

const FooterText = styled.p`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.dark};
`;

const KeepConnectLabel = styled.p`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;
const LoginProblemLabel = styled.p`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;

const CoinPriceLabel = styled.p`
  font-size: ${typography.modal_subtitle2};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;

const WelcomeText = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${typography.modal_title};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.dark};
`;

const LogOutText = styled.h3`
  display: flex;
  align-items: center;
  font-size: ${typography.modal_title};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.dark};
`;

const S = {
  TitleText,
  SubTitleText,
  InputLabelText,
  KeepConnectLabel,
  LoginProblemLabel,
  FooterText,
  CoinPriceLabel,
  WelcomeText,
  LogOutText,
};

export default S;

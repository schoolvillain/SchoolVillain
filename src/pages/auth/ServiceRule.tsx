import * as React from 'react';
import styled from "@emotion/styled";
import {media} from "../../../assets/style/Media.style";
import {MarkdownBase, MarkdownMd} from "../../../assets/style/Markdown.style";
import {Color} from "../../../assets/style/Color.style";
import {Link} from "react-router-dom";
import SEO from "../../constants/SEO/SEO";

const ServiceRuleSection = styled.section`
  padding:60px 10%;
  min-height:100vh;
  ${media.sm`padding:60px 5%`};
`
const ServiceRuleArticle = styled.article`
  padding:15px 0;
`
const ServiceRuleHeading = styled.div`
  ${MarkdownMd(Color.purple200, 700)};
  text-align: center;
  margin-top:20px;
`
const ServiceRuleTitle = styled.div`
  ${MarkdownBase('', 700)};
  margin-bottom:10px;
`
const ServiceRuleList = styled.li`
  list-style: initial;
`

const ServiceRuleBtn = styled.button`
  position:fixed;
  bottom:0;
  width:100%;
  height: 45px;
  ${MarkdownMd(Color.white)};
  background-color:${Color.purple200};
  &:hover{
    background-color: ${Color.purple300};
  }
`

const ServiceRule = () => {
    return (
        <>
            <SEO title="이용약관 | 스쿨빌런"
                 description="스쿨빌런 이용약관 페이지입니다."
                 keywords="스쿨빌런 이용약관 페이지"
            />
            <Link to="/join/agreement">
                <ServiceRuleBtn>확인</ServiceRuleBtn>
            </Link>
            <ServiceRuleSection>
                <ServiceRuleHeading>이용약관</ServiceRuleHeading>
                <ServiceRuleArticle>
                    <ServiceRuleTitle>제 1장. 총칙</ServiceRuleTitle>

                    <strong>제 1조. 목적</strong><br/><br/>

                    스쿨빌런서비스약관(이하 "본 약관")은 회사(이하 "스쿨빌런")가 제공하는 스쿨빌런 및 스쿨빌런 관련 모든 “서비스”와 관련하여 스쿨빌런과 “회원” 및 “비회원”, “이용자”의
                    권리⋅의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.<br/><br/>

                    <strong>제 2조. 정의</strong><br/><br/>

                    본 약관의 용어 정의는 다음 각 호와 같습니다.<br/><br/>

                    <ServiceRuleList>서비스: 구현되는 단말기(PC, TV, 휴대형 단말기 등 각종 유무선 장치를 포함)와 상관없이 "이용자"가 스쿨빌런 플랫폼에 접속하여 스쿨빌런 및 스쿨빌런이 제공하는 일체의 용역,
                        자료 DB화, 컴퓨터 기타 이와 유사한 정보통신처리장치를 이용한 일체의 행위</ServiceRuleList>

                    <ServiceRuleList>이용자: 스쿨빌런에 접속하여 본 약관에 따라 “서비스”를 받는 “회원” 및 “비회원”</ServiceRuleList>

                    <ServiceRuleList>비회원: “비회원”이라 함은 “회원”으로 가입하지 않고 스쿨빌런이 제공하는 “서비스”를 이용하는 자</ServiceRuleList>

                    <ServiceRuleList>회원: 스쿨빌런에 “개인정보”를 제공하여 가입절차를 거친 후 스쿨빌런이 제공하는 “서비스”를 이용하는 자</ServiceRuleList>

                    <ServiceRuleList>회원ID: “회원” 식별과 “서비스” 이용을 위하여 스쿨빌런 “회원”임을 확인하고 “회원” 자신의 비밀보호를 위해 “회원”자신이 선정하고 스쿨빌런이 승인하는 문자와 숫자의 조합</ServiceRuleList>

                    <ServiceRuleList>비밀번호: 스쿨빌런 “회원”이 부여 받은 “회원ID”와 일치된 “회원”임을 확인하고 자신의 비밀 보호를 위해 “회원”이 설정한 문자와 숫자의 조합</ServiceRuleList>

                    <ServiceRuleList>개인정보: 생존하는 개인에 관한 정보로서 해당 정보에 포함되어 있는 학교, 이메일 주소, 휴대전화 번호 등의 사항에 의하여 해당 개인을 식별할 수 있는 정보(해당 정보만으로는 특정
                    개인을
                        식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)</ServiceRuleList>

                    <ServiceRuleList>유료서비스 : 스쿨빌런이 유료로 제공하는 각종 콘텐츠 및 제반 “서비스”</ServiceRuleList>

                    <ServiceRuleList>서비스이용요금(또는 서비스요금 또는 이용요금) : 스쿨빌런이 제공하는 “서비스”를 사용하기 위해서 지불하는 대가</ServiceRuleList>

                    <ServiceRuleList>플랫폼 : 스쿨빌런이 “서비스”를 제공하기 위해 온라인에 구축한 API(application programming interface), DB, 기타 이와 유사한 정보통신 처리
                    장치로서 앱
                        개발자와 웹 사이트 운영자를 비롯한 타인은 위 정보통신처리장치에 API, DB 등을 제공할 수도 있고, 데이터를 검색할 수도 있습니다</ServiceRuleList>

                    <ServiceRuleList>어플리케이션 : 플랫폼에 접속하여 스쿨빌런이 제공하는 “서비스”를 이용할 수 있도록 하는 웹, 모바일 웹, 스마트폰 앱, 기타 이와 유사한 정보통신 처리장치</ServiceRuleList>

                    <ServiceRuleList>콘텐츠 : 스쿨빌런이 생성, 수집, 기타 일체의 방법으로 플랫폼에 제공한 콘텐츠</ServiceRuleList>

                    <ServiceRuleList>이용자 콘텐츠 : "이용자"가 "서비스"를 이용함에 있어 "서비스”상에 게시한 부호, 문자, 음성, 음향, 화상, 동영상 등의 정보, 각종 파일과 링크</ServiceRuleList>

                    <ServiceRuleList>데이터 : 스쿨빌런이 “서비스”를 제공하는 과정에서 수집하고 축적한 각종 정보, 자료 및 이용의 콘텐츠</ServiceRuleList>

                    <strong>제 3조. 약관적용과 약관 외 준칙</strong><br/><br/>

                    스쿨빌런의 “서비스” 이용에 관하여 본 약관을 적용하며, 본 약관에 명시되지 아니한 사항과 이 약관의 해석 및 약관에 규용되지 아니한 사항에 관하여는 전기통신기본법,
                    전기통신사업법, 정보통신망 이용촉진 등에 관한 법률, 전자거래기본법, 신용정보의 이용 및 보호에 관한 법률, 기타 관련 법령의 규정, 또는 상관례에 따릅니다<br/><br/>

                    <strong>제 4조. 약관의 공시, 준용, 효력 및 변경</strong><br/><br/>

                    본 약관은 “회원” 가입 시 “이용자”에게 공시되며, “이용자”는 회원 가입을 함으로써 “본 약관”에 동의하는 것으로 간주됩니다.<br/><br/>

                    다만, “이용자”가 “비회원”으로 “서비스”를 이용하면 이용 시 본 약관에 동의하는 것으로 간주됩니다.<br/><br/>

                    약관의 내용은 “서비스” 약관페이지에 게시하여 공지합니다. 스쿨빌런는 사정변경의 경우와 영업상 중요한 사유가 있을 경우 관련법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며,
                    변경된 약관은 “이용자”에게 적용일자를 명시하여 “서비스” 이용 약관 페이지와 공지사항에 변경 기준일로부터 최소7일 전에 공지하는 것을 원칙으로 합니다. 단, 변경 내용이 귀하에 불리한
                    영향을 미칠 것으로 판단되는 사항에 대해서는 최소30일 이상의 유예 기간을 두어 고지합니다. 또한 동 기간 동안 개정된 약관의 내용을 약관이 게시되는 “서비스” 화면에 함께 게시하며,
                    위의 유예기간 이후 변경 약관의 효력을 발생합니다.<br/><br/>

                    스쿨빌런의 약관을 개정할 경우 그 개정 약관은 적용일자 이후에 발생하는 사안에 대해서만 적용됩니다. 스쿨빌런이 전항에 따라 “이용자”에게 통지하면서 공지⋅고지일로부터 개정약관
                    시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 변경된 약관에 동의하지 않을
                    경우 “본 약관” 제19조 제1항에 따라 계약 해지를 신청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 “서비스”를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
                    다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 스쿨빌런는 이용계약을 해지할 수 있습니다.<br/><br/>

                    제2조의 “회원” 및 본 조 제1항 내지 제4항의 규정과는 별도로 법령에 의해 개별적인 통보 및 동의가 필요한 경우에는 그 절차에 따릅니다.
                </ServiceRuleArticle>
                <ServiceRuleArticle>
                    <ServiceRuleTitle>제 2장. 서비스 이용계약</ServiceRuleTitle>

                    <strong>제 5조. 이용계약의 성립</strong><br/><br/>

                    스쿨빌런 “회원”으로 가입하여 스쿨빌런이 제공하는 “서비스”를 받고자 하는 자는 “회원”가입절차를 거쳐 가입하여야 합니다. “회원” 가입 희망자가 “본 약관”의 내용을 숙지하고
                    동의
                    여부를 선택할 수 있으며, “회원”은 “회원”가입절차를 거쳐 “회원”가입을 신청하면 “본 약관”에 동의하는 것으로 간주됩니다. 약관 변경 시 공지된 변경 약관에 동의하지 않을 경우
                    제19조 제1항에 따라 계약 해지를 신청이 가능합니다.<br/><br/>

                    “회원”과 스쿨빌런 간의 이용계약은 “서비스” 이용 희망자의 이용약관 동의 후 이용 신청에 대하여 스쿨빌런이 신청절차 상에서 승낙을 표시함으로써 성립합니다.<br/><br/>

                    단, “비회원”으로 스쿨빌런이 제공하는 “서비스”를 이용 하고자 하는 자는 회원가입절차 없이 스쿨빌런의 “서비스”를 이용함으로써 “본 약관”에 동의한 것으로 간주됩니다. 약관 변경
                    시에는, 변경된 약관이 공지된 이후 “비회원”으로 스쿨빌런 “서비스”를 재이용할 시 변경된 약관에 동의한 것으로 간주됩니다. 약관 변경 시 공지된 변경 약관에 동의하지 않을 경우
                    제19조
                    제1항에 따라 계약 해지를 신청이 가능합니다.<br/><br/>

                    “비회원”과 스쿨빌런 간의 이용계약은 “서비스” 이용 희망자가 “서비스” 이용을 신청하고 이를 스쿨빌런이 승낙하여 “서비스”를 제공함으로써 성립합니다.<br/><br/>

                    <strong>제 6조. 이용신청</strong><br/><br/>

                    “회원”으로 가입하여 “서비스”를 이용하기를 희망하는 자는 스쿨빌런이 요청하는 소정의 가입 신청 양식에서 요구하는 사항을 기록하여 신청합니다.<br/><br/>

                    단, “비회원”으로 “서비스”를 이용하기를 희망하는 자는 스쿨빌런의 “서비스”를 이용함으로써 자동으로 스쿨빌런의 “비회원” “이용자”로 간주됩니다.<br/><br/>

                    온라인 “회원” 가입신청 양식 및 “비회원”이 “서비스” 이용에 기재하는 모든 “이용자” 정보는 실제 데이터인 것으로 간주하므로 실명이나 실제 정보를 입력하지 않은 “서비스”
                    사용의
                    제한을 받으시거나 법적 보호를 받지 못 하실 수 있습니다.<br/><br/>

                    <strong>제 7조. 이용신청의 승낙</strong><br/><br/>

                    스쿨빌런는 제6조에 따른 “이용자”의 이용신청에 대하여 신용정보의 이용 및 보호에 관한 법률이 정하는 특별한 사정이 없는 한 접수 순서대로 이용 신청을 승낙합니다.<br/><br/>

                    스쿨빌런는 다음 각 호에 해당하는 경우 이용신청에 대한 승낙을 제한하거나, 그 사유가 해소될 때까지 승낙을 유보할 수 있으며, 사후에라도 이용계약을 해지할 수 있습니다.<br/><br/>

                    <ServiceRuleList>“서비스” 관련 설비에 여유가 없는 경우.</ServiceRuleList>

                    <ServiceRuleList>기술상 지장이 있는 경우.</ServiceRuleList>

                    <ServiceRuleList>기타 스쿨빌런의 사정상 필요하다고 인정되는 경우.</ServiceRuleList><br/>

                    스쿨빌런는 다음 각 호에 해당하는 이용계약 신청에 대하여는 이를 승낙하지 않을 수 있습니다.<br/><br/>

                    <ServiceRuleList>본인의 실명으로 신청하지 않은 경우.</ServiceRuleList>

                    <ServiceRuleList>다른 사람의 명의를 사용하여 신청한 경우</ServiceRuleList>

                    <ServiceRuleList>이용 신청 시 허위의 정보를 기재하거나, 허위서류를 첨부하는 경우, 스쿨빌런이 제시하는 내용을 기재하지 않은 경우</ServiceRuleList>

                    <ServiceRuleList>사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청한 경우.</ServiceRuleList>

                    <ServiceRuleList>이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우</ServiceRuleList>

                    <ServiceRuleList>기타 스쿨빌런이 정한 이용 신청 요건이 미흡한 경우</ServiceRuleList><br/>

                    스쿨빌런는 관계법령에서 규정하는 미성년자일 경우에 이용계약 신청의 승낙을 보류할 수 있습니다.<br/><br/>

                    <strong>제 8조. 개인정보의 보호</strong><br/><br/>

                    1. 스쿨빌런는 “이용자”의 “개인정보” 보호를 위해 최선을 다하고 있습니다. “이용자”의 “개인정보” 보호 및 “이용자”가 스쿨빌런를 이용하여 “이용자”의 콘텐츠를 타인과
                    공유하고
                    스쿨빌런이 이를 수집 및 이용하는 방법에 대해 중요한 사항은 개인정보 취급방침이 적용됩니다.<br/><br/>

                    <strong>제 9조. 계약 사항의 변경</strong><br/><br/>

                    “이용자”는 “개인정보”관리를 통해 언제든지 본인의 “개인정보”를 열람하고 수정을 요청할 수 있습니다. 다만, “서비스” 관리를 위해 필요한 아이디 등은 수정이 불가능합니다.<br/><br/>

                    “이용자”는 이용신청 및 회원가입 시 기재한 사항이 변경되었을 경우 온라인 수정 및 전자우편으로 스쿨빌런에 그 변경사항을 알려야 합니다. 변경사항의 미통보로 인하여 발생한 손해의
                    책임은
                    “회원”에게 있습니다.
                </ServiceRuleArticle>
                <ServiceRuleArticle>
                    <ServiceRuleTitle>제 3장. 계약 당사자의 의무</ServiceRuleTitle>

                    <strong>제 10조. 스쿨빌런의 의무</strong><br/><br/>

                    스쿨빌런은 본 약관에서 정한 바에 따라 계속적이고 안정적인 “서비스”의 제공을 위하여 지속적으로 노력하며, 설비에 장애가 생기거나 멸실 된 때에는 지체 없이 이를 수리 복구합니다.
                    다만,
                    천재지변, 비상사태 또는 그밖에 부득이한 경우에는 그 “서비스”를 일시 중단하거나 중지할 수 있으며, 이 경우에 대한 손해에 대해서는 스쿨빌런이 책임지지 않습니다. 또한 “서비스”
                    운영상, 기술상 필요하고 상당한 이유가 있는 경우 “서비스”의 전부, 또는 일부를 변경할 수 있습니다. “서비스”의 전부, 또는 일부를 변경할 경우 다음 각 호에서 정한 바에
                    따릅니다.<br/><br/>

                    “서비스”의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 “서비스”의 내용 및 제공일자 등을 그 변경 전에 사이트에 게시 또는 전자우편을 통해
                    “이용자”에게
                    공지합니다<br/><br/>

                    무료로 제공되는 “서비스”의 일부 또는 전부를 수정, 중단, 변경할 경우 관련법에 특별한 규정이 없는 한 “회원”에게 별도의 보상을 하지 않습니다.<br/><br/>

                    스쿨빌런은 “회원”으로부터 소정의 절차에 의해 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 적절한 절차를 거처 처리합니다. 처리 시 일정 기간이 소요될 경우 “회원”에게
                    게시판,
                    전자우편, 기타 수단 등을 이용하여 그 사유와 처리 일정을 알려드립니다.<br/><br/>

                    스쿨빌런은 다음 각 호에 해당하는 이용계약 신청에 대하여는 이를 승낙하지 않을 수 있습니다.<br/><br/>

                    스쿨빌런은 정보통신망 이용촉진 등에 관한 법률, 통신비밀보호법, 전기통신기본법 등 “서비스”의 운영, 유지와 관련 있는 법규를 준수합니다.<br/><br/>

                    <strong>제 11조. 이용자의 의무</strong><br/><br/>

                    “유료서비스”를 사용하는 스쿨빌런 “이용자”는 “서비스” 이용에 대한 대가로 스쿨빌런이 책정한 “서비스요금”을 스쿨빌런에 지불하여야 합니다. “유료서비스” 이용에 따른 요금 지급은
                    스쿨빌런 ‘유료서비스 이용 및 결제약관’이 적용됩니다.<br/><br/>

                    “이용자”는 이 약관에서 규정하는 사항과 “서비스” 이용안내 또는 주의사항 등 스쿨빌런이 공지 혹은 통지하는 사항을 준수하여야 하며, 기타 스쿨빌런 운영에 방해되는 행위를 하여서는
                    안
                    됩니다. “본 약관”의 규정이나 정신을 위반하거나 스쿨빌런에 위험이나 법적 피해를 초래한다면 스쿨빌런 “서비스” 전체나 일부의 제공을 중단할 수 있습니다. 이와 같은 사실은 이메일
                    및
                    “이용자”에게 통지 가능한 기타 수단을 통해 알려 드립니다.<br/><br/>

                    “회원”은 “서비스” 이용을 위한 “회원ID”, “비밀번호”의 관리에 대한 책임, 본인 ID의 제3자에 의한 부정사용 등 “회원”의 고의⋅과실로 인해 발생하는 모든 불이익에 대한
                    책임을
                    부담합니다. <br/><br/>
                    단, 이것이 스쿨빌런의 고의⋅과실로 인하여 야기된 경우는 스쿨빌런이 책임을 부담합니다. <br/><br/>
                    스쿨빌런는 다음 각 호의 경우 해당 아이디의 이용을 제한할 수 있습니다.<br/><br/>

                    <ServiceRuleList>“개인정보” 유출 우려가 있는 경우</ServiceRuleList>

                    <ServiceRuleList>반사회적 또는 미풍양속에 어긋나는 경우</ServiceRuleList>

                    <ServiceRuleList>스쿨빌런이 “서비스”를 제공하는데 현저한 장애를 유발하는 경우</ServiceRuleList><br/>

                    “이용자”는 스쿨빌런이 공지사항에 게시하거나 전자우편 등 “이용자”에게 통보 가능한 기타 수단으로 별도 공지한 이용제한 사항을 준수하여야 합니다.<br/><br/>

                    “이용자”는 스쿨빌런의 명시적인 동의가 없는 한 “서비스”의 이용권한, 기타 이용계약 상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.<br/><br/>

                    스쿨빌런을 안전하게 유지하기 위해 최선을 다하고 있지만 “이용자”가 다음 각 호의 행위를 하는 경우에는 안전을 보장할 수 없습니다. 안전을 위해서 “이용자”는 “서비스” 이용과
                    관련하여 다음 각 호에 해당되는 행위를 하여서는 아니 됩니다.<br/><br/>

                    <ServiceRuleList>다른 “이용자”의 ID와 “비밀번호” 및 다른 “이용자”의 “개인정보”를 도용하는 행위</ServiceRuleList>

                    <ServiceRuleList>본 “서비스”를 통하여 얻은 정보를 스쿨빌런의 사전 승낙 없이 “이용자”의 이용 이외 목적으로 복제하거나 이를 출판 및 방송 등에 사용하거나 제3자에게 제공하는 행위.</ServiceRuleList>

                    <ServiceRuleList>타인의 특허, 상표, 영업비밀, 저작권 기타 지적재산권을 침해하는 내용을 게시, 전자메일 또는 기타의 방법으로 타인에게 유포하는 행위.</ServiceRuleList>

                    <ServiceRuleList>공공질서 및 미풍양속에 위반되는 저속, 음란, 증오, 폭력적인 내용의 정보, 문장, 도형 등을 전송, 게시, 전자메일 또는 기타의 방법으로 타인에게 유포하는 행위.</ServiceRuleList>

                    <ServiceRuleList>모욕적이거나 위협적이어서 타인의 프라이버시를 침해할 수 있는 내용을 전송, 게시, 전자메일 또는 기타의 방법으로 타인에게 유포하는 행위.</ServiceRuleList>

                    <ServiceRuleList> 스쿨빌런이 제공하는 “서비스”를 이용하여 불법적이거나 오해의 소지가 있거나 악의적이거나 차별적인 활동을 하는 행위</ServiceRuleList>

                    <ServiceRuleList>관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)를 전송 또는 게시하는 행위</ServiceRuleList>

                    <ServiceRuleList>“서비스” 거부 공격과 같이 “서비스”의 적절한 작동을 무력하게 만들거나 과도한 부담을 주거나 저해할 수 있는 행위</ServiceRuleList>

                    <ServiceRuleList>스쿨빌런의 허가 없이 자동화된 수단(예, 수집로봇, 스파이더, 스크래퍼)을 이용하여 사용자의 콘텐츠나 정보를 수집하거나 다른 방식을 통해 접근하는 행위</ServiceRuleList>

                    <ServiceRuleList>컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를
                        게시하거나 전자우편으로 발송하는 행위.</ServiceRuleList>

                    <ServiceRuleList>불특정 다수의 자를 대상으로 하여 광고 또는 선전을 게시하거나 스팸메일을 전송하는 등의 방법으로 스쿨빌런의 “서비스”를 이용하여 영리목적의 활동을 하는 행위.</ServiceRuleList>

                    <ServiceRuleList>정크메일(junk mail), 행운의 편지(chain letters), 피라미드 조직에 가입할 것을 권유하는 메일을 보내거나 기타 공서양속에 반하는 정보를 공개 또는 게시하는
                        행위.</ServiceRuleList>

                    <ServiceRuleList>스쿨빌런의 사전 서면 동의 없이 경연이나 경품 등(이하 "프로모션"라 함)을 스쿨빌런 “서비스” 내에서 제공하는 행위. 스쿨빌런이 동의하는 경우에도 홍보에 대한 책임은 전적으로
                        “이용자”에게 있으며, 스쿨빌런의 프로모션가이드라인 및 관련 법규를 모두 준수해야 합니다.</ServiceRuleList>

                    <ServiceRuleList>스쿨빌런의 직원이나 관리자를 가장하거나 사칭하여 내용물을 게시, 등록, 변경하거나 메일을 발송하는 행위.</ServiceRuleList>

                    <ServiceRuleList>범죄와 결부된다고 객관적으로 판단되는 행위.</ServiceRuleList>

                    <ServiceRuleList>스쿨빌런의 승인을 받지 않고 다른 사용자의 “개인정보”를 수집 또는 저장하는 행위</ServiceRuleList>

                    <ServiceRuleList>본 약관의 위반을 조장하거나 권장하는 행위</ServiceRuleList>

                    <ServiceRuleList>기타 관계법령에 위배되는 행위</ServiceRuleList><br/>

                    스쿨빌런 및 “이용자”는 타인의 권리를 보호하기 위해 다음 각 호에서 정한 사항을 이행합니다.<br/><br/>

                    스쿨빌런은 타인의 권리를 존중하며, “이용자”도 이를 존중해야 합니다.<br/><br/>

                    “이용자”는 타인의 권리를 침해하여서는 아니되며 법률을 위반하는 콘텐츠를 게시하거나 그러한 조치를 취할 수 없습니다. 이에 위반하는 콘텐츠나 정보를 스쿨빌런이 임의로 제거할 수
                    있습니다.<br/><br/>

                    상습적으로 타인의 지적 재산권을 침해하는 경우, “이용자”의 “서비스” 이용이 제한될 수 있습니다.<br/><br/>

                    스쿨빌런의 서면 허가 없이 스쿨빌런의 저작권이나 상표권 및 스쿨빌런과 혼동되는 유사 상표를 사용할 수 없습니다.<br/><br/>

                    “이용자”로부터 정보를 수집하는 경우에는 “이용자”의 동의를 구하고 정보를 수집하는 주체는 “이용자”(스쿨빌런이 아니라)임을 분명히 밝히고 “이용자”가 수집하는 정보와 이용 방법을
                    설명하는 “개인정보 취급방침"을 게시해야 합니다.<br/><br/>

                    타인의 신분 증명 문서나 민감한 금융 정보는 게시할 수 없습니다.<br/><br/>

                    스쿨빌런의 모바일 “서비스”는 다음 각 호에서 정한 바에 따라 제공됩니다.<br/><br/>

                    스쿨빌런은 현재 “서비스”를 무료로 제공하지만, “이용자”의 “서비스” 이용에 따른 문자 메시지 수수료와 같은 이동통신사의 정규 요금 및 수수료는 적용됩니다.<br/><br/>

                    “이용자”는 스쿨빌런에 보이는 기본 정보 및 사용자 콘텐츠를 동기화(어플리케이션을 통한 동기화 포함)하는 데 필요한 모든 권리를 제공합니다.<br/><br/>

                    모바일에서 등록한 콘텐츠, 프로필, “개인정보”는 웹과 동일한 약관이 적용됩니다.
                </ServiceRuleArticle>
                <ServiceRuleArticle>
                    <ServiceRuleTitle>제 4장. 서비스 이용</ServiceRuleTitle>

                    <strong>제 12조. 정보 제공</strong><br/><br/>

                    “이용자”는 스쿨빌런의 자체 “서비스” 및 공지내용을 이메일, 휴대폰 문자메시지로 받을 수 있으며, 광고 정보의 경우 수신 여부를 선택 할 수 있고, 수신에 동의한 “이용자”에
                    한하여
                    광고 정보를 받게 됩니다. 다만, “이용자”의 거래관련 정보 및 고객문의 등에 대한 회신에 있어서는 제외됩니다.<br/><br/>

                    <strong>제 13조. 콘텐츠의 제공</strong><br/><br/>

                    “이용자”는 “이용자”가 스쿨빌런의 “서비스”를 원활히 이용하기 위해 스쿨빌런에서 요구하는 콘텐츠 및 정보를 성실히 제공하여야 합니다. “이용자”의 성실하지 않은 콘텐츠 및 정보
                    제공에
                    따라 스쿨빌런의 “서비스”가 원활히 제공되지 못한 경우 스쿨빌런는 이에 대한 어떤 책임도 지지 않습니다.<br/><br/>

                    “이용자”는 스쿨빌런의 “서비스”를 통해 “현직자”에게 콘텐츠 및 정보를 요청하는데 있어 다음 각 호의 내용에 대해서는 질의할 수 없습니다. 다음 각 호의 내용을 “이용자”가
                    질의할 경우
                    스쿨빌런 및 “현직자”는 이에 대한 답변을 제공할 의무가 없습니다.<br/><br/>

                    회사의 영업비밀 및 기술비밀 등 회사의 기밀에 관련된 내용.<br/><br/>

                    기타 상장회사 주가에 영향을 줄 수 있는 회사의 기밀 정보.<br/><br/>

                    연봉정보 등 “현직자”가 회사와 맺은 근로 계약에 따라 외부 공개가 금지된 인사 정보.<br/><br/>

                    “현직자”의 “개인정보”.<br/><br/>

                    기타 서비스 목적에 관련 없는 정보.<br/><br/>

                    <strong>제 14조. 콘텐츠 관리</strong><br/><br/>

                    스쿨빌런는 건전한 통신문화정착과 효율적인 “서비스” 운영을 위하여 “이용자”가 제공하는 콘텐츠가 다음에 해당한다고 판단되는 경우에 임의로 삭제, 적합한 위치로의 이동, 등록거부를
                    할 수
                    있습니다.<br/><br/>

                    <ServiceRuleList>스쿨빌런에서 규정한 제공 기간을 초과한 경우.</ServiceRuleList>

                    <ServiceRuleList>“서비스”의 성격에 부합하지 않는 콘텐츠의 경우.</ServiceRuleList>

                    <ServiceRuleList> 제3자 또는 스쿨빌런의 명예, 신용을 훼손하거나 오용하는 내용 또는 영업을 방해하는 내용인 경우.</ServiceRuleList>

                    <ServiceRuleList>위법적 행위와 결부된다고 객관적으로 인정되는 내용인 경우.</ServiceRuleList>

                    <ServiceRuleList>제3자 또는 스쿨빌런의 저작권 및 지적재산권 등 권리를 침해하는 내용인 경우.</ServiceRuleList>

                    <ServiceRuleList>공공질서 및 미풍양속에 위반되는 내용인 경우(예. 욕설, 음란 등).</ServiceRuleList>

                    <ServiceRuleList> 제11조 제6항에 해당하는 경우.</ServiceRuleList>

                    <ServiceRuleList>"정보통신망법" 및 "저작권법"등 관계법령 및 스쿨빌런의 게시물 관리 규정에 위배된다고 판단되는 경우.</ServiceRuleList><br/>

                    정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 "정보통신망법"이라 함)의 규정에 의해 다른 “이용자”의 공개된 콘텐츠 등이 본인의 사생활을 침해하거나 명예를 훼손하는 등
                    권리를 침해 받은 “이용자” 또는 제3자(이하 "삭제 등 신청인"이라 합니다)는 그 침해사실을 소명하여 스쿨빌런에 해당 콘텐츠 등의 삭제 또는 반박 내용의 게재를 요청할 수 있습니다. 이
                    경우 스쿨빌런는 해당 게시물 등의 권리 침해 여부를 판단할 수 없거나 당사자 간의 다툼이 예상되는 경우 해당 콘텐츠 등에 대한 접근을 임시적으로 차단하는 조치(이하 "임시조치"라
                    합니다)를 최장 30일까지 취합니다.<br/><br/>

                    제2항에 의해 본인의 게시물 등이 임시조치 된 “이용자”(이하 "제공자"라 합니다)는 임시조치기간 중 스쿨빌런에 해당 콘텐츠 등을 복원해 줄 것을 요청(이하 "재게시 청구"라
                    함)할 수 있으며, 스쿨빌런는 임시조치된 콘텐츠의 명예훼손 등 판단에 대한 방송통신심의위원회 심의 요청에 대한 제공자 및 삭제 등 신청인의 동의가 있는 경우 제공자 및 삭제 등 신청인을
                    대리하여 이를 요청하고 동의가 없는 경우 스쿨빌런이 이를 판단하여 콘텐츠 등의 복원 여부를 결정합니다. 제공자의 재게시 청구가 있는 경우 임시조치 기간 내에 방송통신심의위원회 또는
                    스쿨빌런의 결정이 있으면 그 결정에 따르고 그 결정이 임시조치 기간 내에 있지 않는 경우 해당 콘텐츠 등은 임시조치 만료일 이후 복원됩니다. 재게시 청구가 없는 경우 해당 콘텐츠 등은
                    임시조치 기간 만료 이후 삭제됩니다.<br/><br/>

                    스쿨빌런는 서비스 내에 제공된 콘텐츠 등이 사생활 침해 또는 명예훼손 등 제3자의 권리를 침해한다고 인정하는 경우 제2항에 따른 “회원” 또는 제3자의 신고가 없는 경우에도
                    임시조치(이하 "임의의 임시조치"라 합니다)를 취할 수 있습니다. 임의의 임시조치된 콘텐츠의 처리 절차는 제2항 후단 및 제3항의 규정에 따릅니다.<br/><br/>

                    “이용자”의 콘텐츠 등으로 인한 법률상 이익 침해를 근거로, 다른 “회원” 또는 제3자가 “회원” 또는 스쿨빌런를 대상으로 하여 민형사상의 법적 조치(예: 형사고소, 가처분
                    신청⋅손해배상청구 등 민사소송의 제기)를 취하는 경우, 스쿨빌런는 동 법적 조치의 결과인 법원의 확정판결이 있을 때까지 관련 콘텐츠 등에 대한 접근을 잠정적으로 제한할 수
                    있습니다. 콘텐츠 등의 접근 제한과 관련한 법적 조치의 소명, 법원의 확정 판결에 대한 소명 책임은 콘텐츠 등에 대한 조치를 요청하는 자가 부담합니다.

                    <strong>제 15조. 콘텐츠의 저작권 및 권리의 귀속과 콘텐츠의 공유</strong><br/><br/>

                    “서비스”에 게재된 자료에 대한 권리는 다음 각 호의 내용과 같습니다.<br/><br/>

                    스쿨빌런이 작성한 저작물에 대한 저작권 및 기타 지적재산권은 스쿨빌런에 귀속합니다. 단, "이용자"의 콘텐츠 및 제휴계약에 따라 제공된 저작물 등은 제외합니다.<br/><br/>

                    스쿨빌런은 “서비스”와 관련하여 "이용자"에게 스쿨빌런이 정한 이용조건에 따라 “서비스”를 통해 콘텐츠를 이용할 수 있는 이용권한이 부여됩니다. “이용자”는 “서비스”를
                    이용함으로써 얻은
                    정보를 스쿨빌런의 사전 승낙 없이 복제, 송신, 출판, 전송, 배포, 방송 기타 방법에 의하여 영리 및 비영리목적으로 이용하거나 판매, 담보제공 혹은 제3자에게 이용하게 할 수
                    없습니다.<br/><br/>

                    “이용자”가 제공하는 콘텐츠와 정보의 모든 소유권은 “이용자”에게 있습니다.<br/><br/>

                    단, “이용자”가 제공하는 콘텐츠와 정보(이하 "이용자 콘텐츠"라 함)에 대해 다음의 각 목에서 정한 바에 따라 “이용자”는 스쿨빌런에게 사용권한을 부여합니다.<br/><br/>

                    스쿨빌런이 서비스 운영을 위해 필요하다고 판단되는 경우 “이용자”의 콘텐츠가 제3자에게 제공될 수 있습니다. 단, “이용자”의 콘텐츠가 제공될 때 “이용자”의 “개인정보”는
                    제외하고
                    제공함으로써 “이용자”의 신분을 보호하기 위해 스쿨빌런는 합리적인 모든 노력을 다합니다.<br/><br/>

                    “이용자”는 “이용자”의 이용자 콘텐츠를 “서비스” 개선 목적으로 분석할 수 있는 권한을 스쿨빌런에게 부여합니다. 단, 스쿨빌런에 부여된 권한은 전 세계를 대상으로 하며,
                    비독점적이고,
                    양도 또는 재면허를 부여할 수 있고, 그에 대한 사용료, 기타 반대급부는 무상으로 합니다.<br/><br/>

                    “이용자”가 스쿨빌런에 부여한 권한은 “이용자”가 제19조 제1항에 따라 계약을 해지할 때 종료됩니다. 단, “이용자”가 콘텐츠를 타인과 공유하고 타인이 이를 삭제하지 않았을
                    경우에는
                    그러하지 아니합니다. 외부 API등 오픈플랫폼을 제공하는 “서비스”에 저장되는 경우 콘텐츠 유실 등의 책임은 스쿨빌런이 부담하지 않습니다.<br/><br/>

                    “이용자 콘텐츠”를 삭제하면 컴퓨터의 휴지통을 비우는 것과 유사한 방식으로 “이용자 콘텐츠”가 삭제됩니다. 단, 제거된 “이용자 콘텐츠”는 일정 기간 동안 백업 사본으로 존속될 수
                    있으며, 백업 사본으로 존속되는 동안에도 타인에게 제공되지는 않습니다.<br/><br/>

                    어플리케이션을 이용할 경우 “이용자 콘텐츠”나 “이용자”의 정보는 어플리케이션과 공유됩니다. 해당 어플리케이션과 “이용자”의 계약은 어플리케이션이 해당 콘텐츠나 정보를 이용,
                    저장,
                    전송하는 방법에 적용됩니다.<br/><br/>

                    스쿨빌런에 대한 의견을 포함한 제안은 언제든지 환영하지만, (“회원”에게 제안 의무가 없는 것처럼) 스쿨빌런도 보상 의무 없이 이를 활용할 수 있습니다.<br/><br/>

                    스쿨빌런는 제1항 이외의 방법으로 “이용자”의 “이용자 콘텐츠”를 상업적으로 이용하고자 하는 경우, 전화, 팩스, 전자우편 등의 방법을 통해 사전에 “이용자”의 동의를 얻어야
                    합니다.<br/>
                    단, 회원정보 등 “이용자” 제공한 연락처가 사실과 다르거나 “이용자”가 스쿨빌런의 연락에 응하지 않아 사전에 동의를 구하지 못한 경우, 스쿨빌런은 사후에 동의 절차를 구할 수
                    있습니다.<br/><br/>

                    <strong>제 16조. 광고게재 및 광고주와의 거래</strong><br/><br/>

                    스쿨빌런은 본 “서비스” 상에 게재된 광고주의 판촉활동 및 광고주와 “회원”간의 교신 또는 거래의 결과로서 발생하는 모든 손실 또는 손해에 대해 책임을 지지 않습니다.<br/><br/>

                    <strong>제 17조. 서비스 이용시간</strong><br/><br/>

                    “서비스”의 이용은 스쿨빌런의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴1일 24시간 가능함을 원칙으로 합니다. 다만 정기 점검 등의 필요로 스쿨빌런이 정한 기간은
                    예외입니다.<br/><br/>

                    “서비스”에서 보장하고 있는 스쿨빌런이 “이용자”에게 제공하는 답변 시간은 국가가 지정하는 법정 공휴일 및 토요일, 일요일은 제외하고 계산됩니다.<br/><br/>

                    스쿨빌런는 “서비스”를 일정범위로 분할하여 각 범위 별로 이용가능 시간을 별도로 정할 수 있습니다. 이 경우 사전에 공지를 통해 그 내용을 알립니다.<br/><br/>

                    <strong>제 18조. 서비스 제공의 중지 등</strong><br/><br/>

                    스쿨빌런은 다음에 해당하는 경우 “서비스” 제공을 중지할 수 있습니다.<br/><br/>

                    A. 정보통신설비의 보수점검⋅교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 부득이하게 “서비스”의 제공을 일시적으로 중단할 수 있습니다.<br/>

                    B. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우.<br/>

                    C. 기타 불가항력적 사유가 있는 경우<br/>

                    스쿨빌런은 국가비상사태, 정전, “서비스” 설비의 장애 또는 “서비스” 이용의 폭주 등으로 정상적인 “서비스” 이용에 지장이 있는 때에는 “서비스”의 전부 또는 일부를 제한하거나
                    중지할
                    수 있습니다.<br/><br/>

                    스쿨빌런은 제1항 및 제2항의 규정에 의하여 “서비스”의 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 스쿨빌런를 통하여 공지하거나 전자우편 기타의 방법으로 지체 없이
                    “회원”에게 알려야 합니다. 다만, 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
                </ServiceRuleArticle>
                <ServiceRuleArticle>
                    <ServiceRuleTitle>제 5장. 계약해지 및 이용제한</ServiceRuleTitle>

                    <strong>제 19조. 계약 해지 및 이용 제한</strong><br/><br/>

                    “이용자”가 이용 계약을 해지하고자 하는 경우에는 이용계약해지를 전자우편을 통해 신청 해주시면 됩니다. 전자우편을 통해 이용계약해지를 신청 진행하실 경우에는 최대 24시간의 처리
                    기간을
                    갖고 있습니다. “이용자”는 언제든지 “서비스”초기화면의 고객센터를 통하여 이용계약 해지 신청을 할 수 있으며, 스쿨빌런는 관련법 등이 정하는 바에 따라 이를 즉시 처리합니다.<br/><br/>

                    “이용자”가 계약을 해지할 경우, 관련법 및 개인정보보호정책에 따라 스쿨빌런이 회원정보를 보유하는 경우를 제외하고는 해지 즉시 “이용자”의 모든 데이터는 소멸됩니다.<br/><br/>

                    "이용자"가 계약을 해지하는 경우, 본인 계정에 등록된 게시물 일체는 삭제됩니다. 다만, “이용자”가 스쿨빌런 “서비스”를 통해 검토를 요청한 결과물이 “서비스”에 참여한
                    “현직자”에게
                    “이용자”의 “개인정보” 없이 익명으로 전달될 경우 본 결과물은 삭제되지 않습니다.<br/><br/>

                    스쿨빌런는 “이용자”가 본 약관 제 11조의 의무를 위반하거나, 기타 본 약관에 따른 의무를 위반하는 행위를 하였을 경우 이용계약을 해지하거나 또는 “서비스” 이용 중지, 기타
                    “서비스”
                    이용을 제한할 수 있습니다.
                </ServiceRuleArticle>
                <ServiceRuleArticle>
                    <ServiceRuleTitle>제 6장. 손해배상 및 기타 사항</ServiceRuleTitle>

                    <strong>제 20조. 손해배상 및 면책</strong><br/><br/>

                    천재지변 또는 이에 준하는 불가항력으로 인하여 “서비스”를 제공할 수 없는 경우에는 스쿨빌런의 “서비스” 제공에 관한 책임이 면제됩니다.<br/><br/>

                    스쿨빌런은 “회원”의 귀책사유로 인한 “서비스” 이용의 장애에 대하여 책임을 지지 않습니다.<br/><br/>

                    스쿨빌런은 “회원”이 “서비스”를 이용하여 기대하는 수익을 상실한 것이나 “서비스”를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.<br/><br/>

                    스쿨빌런은 제휴회사가 제공하거나 “회원”이 “서비스”에 게재한 정보, 자료 등의 사실 유무 신뢰도, 정확성 등에 관하여는 책임을 지지 않습니다.<br/><br/>

                    스쿨빌런은 “서비스” 이용과 관련하여 가입자에게 발생한 손해 가운데 가입자의 고의, 과실에 의한 손해에 대하여 책임을 지지 않습니다.<br/><br/>

                    <strong>제 21조. 이용자 보호</strong><br/><br/>

                    스쿨빌런은 “이용자”의 권익을 보호하기 위해, 상호명, 대표자 성명, E-mail, 등 스쿨빌런의 신원정보를 홈페이지를 통해 표시하고 있습니다.<br/><br/>

                    스쿨빌런은 “서비스” 이용약관을 공시하여 “이용자”의 피해를 최소화하기 위해 노력합니다.<br/><br/>

                    <strong>제 22조. 분쟁 해결</strong><br/><br/>

                    스쿨빌런은 “이용자”로부터 제기되는 불만사항 및 의견을 우선적으로 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 “이용자”에게 그 사유와 처리 일정을 즉시 통보합니다.<br/><br/>

                    스쿨빌런과 “이용자”는 “서비스”와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 합니다.<br/><br/>

                    “이용자” 의 스쿨빌런에서의 활동이나 콘텐츠, 정보와 관련하여 타인이 스쿨빌런을 상대로 법적 소송을 제기하면, “이용자”는 해당 소송과 관련된 손해나 손실, 경비(합리적인 변호사
                    수임료와
                    비용 포함)로부터 스쿨빌런을 면책 및 보호해야 합니다.<br/><br/>

                    스쿨빌런은 제3자의 활동, 콘텐츠, 정보, 데이터에 대해 책임지지 않으며, 인지 여부에 관계 없이 해당 제3자를 상대로 제기하는 법적 소송으로 인하거나 그와 관련하여 발생하는
                    소송과
                    손해로부터 스쿨빌런과 스쿨빌런의 대표 및 임직원을 면책합니다. 본 조항이나 스쿨빌런로 인하여 발생하는 채무 총액은 지난 일년간 스쿨빌런에 납부한 금액을 초과할 수 없습니다.<br/><br/>

                    제1항 내지 제4항과 관련하여 발생하는 법률분쟁은 서울중앙지방법원을 배타적인 제1심 전속관할 법원으로 하여 해결합니다.<br/><br/>
                </ServiceRuleArticle>
            </ServiceRuleSection>
        </>
    )
}

export default ServiceRule;
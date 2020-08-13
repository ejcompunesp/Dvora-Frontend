import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const TeamMembers = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-bottom: 20px;
  font-size: 14px; 

  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: solid 1px #aaaaaa;
    border-radius: 6px;

    strong{
      font-size: 14px;
    }

    p{
      font-size: 12px;
      margin: 0 0 10px 0;
    }

    img{
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1490px){
    grid-template-columns: repeat(4, minmax(220px, 1fr));
  }

  @media (max-width: 1200px){
    grid-template-columns: repeat(3, minmax(220px, 1fr));
  }

  @media (max-width: 940px){
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }

  @media (max-width: 670px){
    grid-template-columns: repeat(1, minmax(220px, 1fr));
  }
`;

export const DropdownItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 0;

  svg{
    margin-right: 7px;
  }
`;

export const MoreButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg{
      cursor: pointer;
      font-size: 14px;
  }
`;

export const SocialMedias = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  .insta{
    margin: 2px;
    font-size: 29.4px;
    padding: 2px;
    border-radius: 4px;
    color: #fff;
    background:
    radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),
    radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
    radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
    radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),
    radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
    radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),
    radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
    linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
  }

  a{
    transition: filter 0.2s;
    margin: 0;

    svg{
      font-size: 32px;
    }
  }

  a:hover{
    filter: brightness(120%);
  }
`;

export const Pages = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 50px 30px 50px;
`;
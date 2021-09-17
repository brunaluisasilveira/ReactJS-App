import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    &:hover {
      background: #7159c1;
      color: #fff;
      div {
        strong {
          a {
            color: #fff;
            &:hover {
              color: #fff;
            }
          }
          span {
            background: #fff;
            color: #7159c1;
            border-radius: 2px;
            font-size: 10px;
            font-weight: 600;
            height: 20px;
            padding: 3px 4px;
            margin-left: 10px;
          }
        }
        p {
          color: #fff;
        }
      }
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;
          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Prev = styled.button`
  padding: 5px;
  color: #7159c1;
  font-weight: bold;
  border: 1px solid #7159c1;
  &:hover {
    color: #fff;
    background-color: #7159c1;
  }
  &:active {
    background-color: #9370db;
    border: 1px solid #9370db;
  }
`;
export const Next = styled.button`
  color: #7159c1;
  padding: 5px;
  font-weight: bold;
  border: 1px solid #7159c1;
  &:hover {
    color: #fff;
    background-color: #7159c1;
  }
  &:active {
    background-color: #9370db;
    border: 1px solid #9370db;
  }
`;

export const ContainerState = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const All = styled.button`
  color: #7159c1;
  padding: 5px;
  font-weight: bold;
  border: 1px solid #7159c1;
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    color: #fff;
    background-color: #7159c1;
  }
  &:active {
    background-color: #9370db;
    border: 1px solid #9370db;
  }
`;

export const Open = styled.button`
  color: #7159c1;
  padding: 5px;
  font-weight: bold;
  border: 1px solid #7159c1;
  margin-right: 10px;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #7159c1;
  }
  &:active {
    background-color: #9370db;
    border: 1px solid #9370db;
  }
`;

export const Closed = styled.button`
  color: #7159c1;
  padding: 5px;
  font-weight: bold;
  border: 1px solid #7159c1;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #7159c1;
  }
  &:active {
    background-color: #9370db;
    border: 1px solid #9370db;
  }
`;

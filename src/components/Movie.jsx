import React, { useState } from "react";
import { FlexBox } from "./FlexBox/FlexBox";
import {
  Box,
  Button,
  Genre,
  Image,
  Info,
  Infos,
  Input,
  PlotCast,
  TextsBtn,
  Wrapper,
} from "./Movie.style";
import { AiFillStar } from "react-icons/ai";
const Movie = () => {
  const [name, setName] = useState("");
  let key = "698ae0e";
  const [datas, setDatas] = useState();
  let err = `Kino Topilmadi`;
  const searchMovie = () => {
    if (name.length <= 0) {
      return setDatas(err);
    }
    fetch(`https://www.omdbapi.com/?t=${name}&apikey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(
          <Infos>
            <Info>
              <Image src={data.Poster} />
              <TextsBtn>
                <h1 style={{ margin: "0" }}>{data.Title}</h1>
                <p style={{ margin: "0" }}>
                  <AiFillStar style={{ color: "yellow", fontSize: "20px" }} />{" "}
                  {data.imdbRating}
                </p>
                <FlexBox row>
                  <span>{data.Rated}</span>
                  <span>{data.Year}</span>
                  <span>{data.Runtime}</span>
                </FlexBox>
                <Genre>
                  <button>{data.Genre}</button>
                </Genre>
              </TextsBtn>
            </Info>
            <PlotCast>
              <h1>Plot:</h1>
              <p>{data.Plot}</p>
              <h1>Cast:</h1>
              <p>{data.Actors}</p>
              <h1>Languages:</h1>
              <p>{data.Language.split("").join("")}</p>
              <h1>Awards:</h1>
              <p>{data.Awards}</p>
              <h1>Writer:</h1>
              <p>{data.Writer}</p>
            </PlotCast>
          </Infos>
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <Wrapper>
      <Box>
        <FlexBox
          width="100%"
          height="15%"
          row
          justify="space-around"
          gap="10px"
        >
          <Input
            type="text"
            placeholder="Type a movie name..."
            autoComplete="off"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button onClick={() => searchMovie()}>Search</Button>
        </FlexBox>
        {datas}
      </Box>
    </Wrapper>
  );
};

export default Movie;

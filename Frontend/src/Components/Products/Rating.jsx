import { Flex } from "@chakra-ui/react";
import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";

const Rating = ({ value }) => {
  //   console.log(value);
  const STAR_COUNT = 5;
  const stars = Array.from({ length: STAR_COUNT }, () => <EmptyStar />);

  for (let i = 0; i < value; i++) {
    // this will loop Math.floor(value) times
    stars[i] = <FullStar />;
  }

  return <Flex>{stars}</Flex>;
};

export default Rating;

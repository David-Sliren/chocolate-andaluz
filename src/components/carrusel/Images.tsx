interface Props {
  imgSrc: string;
}

export const Images = ({ imgSrc }: Props) => {
  return (
    <div className="sticky z-50 w-110 aspect-9/14 rounded-2xl overflow-hidden cata animate-3d">
      <img src={imgSrc} className="size-full object-cover object-top" />
    </div>
  );
};

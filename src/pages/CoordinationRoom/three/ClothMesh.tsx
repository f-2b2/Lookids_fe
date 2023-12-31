import { useRecoilState } from 'recoil';
import { hoveredClothAtom, selectedClothAtom } from '../../../recolil/atom';
import { useEffect, useState } from 'react';

interface clothMeshProps {
  $clothId: string;
  $clothType: string;
  $texture: any;
  $scale: [number, number];
  $position: [number, number, number];
  $target: any;
}

export const ClothMesh = ({
  $clothId,
  $texture,
  $scale,
  $position,
  $target,
  $clothType,
}: clothMeshProps) => {
  const [selectedCloth, setSelectedCloth] = useRecoilState(selectedClothAtom);
  const [hoveredCloth, setHoveredCloth] = useRecoilState(hoveredClothAtom);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [movePosition, setMovePosition] =
    useState<[number, number, number]>($position);
  const [dragOriginPosition, setDragOriginPosition] = useState<{
    x: number;
    y: number;
  }>({ x: $target.x, y: $target.y });

  const meshPointerDownHandler = (e: any) => {
    if (e.button === 0) {
      if (selectedCloth !== $clothId) {
        setSelectedCloth($clothId);
      } // 얘를 키면 마음대로 움직여서 오히려 불편
      e.stopPropagation();

      setDragActive(true);
    }
  };

  const meshPointerUpHandler = (e: any) => {
    if (e.button === 0) {
      e.stopPropagation();
      setDragActive(false);
      setSelectedCloth('');
    }
  };

  const meshClickHandler = (e: any) => {
    e.stopPropagation();
    if (e.button === 0) {
      setSelectedCloth($clothId);
      setDragActive(false);
      console.log($scale, $clothType);
    }
  };

  const meshPointerEnterHandler = () => {
    setHoveredCloth($clothId);
  };

  const meshPointerLeaveHandler = () => {
    setHoveredCloth($clothId);
  };

  const DragTldFunc = () => {
    // let moveX = $target.x - dragOriginPosition.x;
    // let moveY = $target.y - dragOriginPosition.y;

    setMovePosition([$target.x, $target.y, 0]);
    setDragOriginPosition({ x: $target.x, y: $target.y });
  };

  useEffect(() => {
    setDragActive(false);
    return () => {
      setDragActive(false);
    };
  }, [$clothId]);

  useEffect(() => {
    if (dragActive && selectedCloth === $clothId) {
      DragTldFunc();
    }
  }, [dragActive, $target]);

  const imgWidth = $texture.image.naturalWidth;
  const imgHeight = $texture.image.naturalHeight;

  return (
    <>
      {$texture && (
        <mesh
          position={movePosition}
          onPointerDown={meshPointerDownHandler}
          onPointerUp={meshPointerUpHandler}
          onClick={meshClickHandler}
          onPointerEnter={meshPointerEnterHandler}
          onPointerLeave={meshPointerLeaveHandler}
        >
          <planeGeometry
            args={
              $clothType === 'TOP'
                ? [$scale[0] / 14, $scale[1] / 20]
                : [$scale[0] / 20, $scale[1] / 20]
            }
          />
          <meshBasicMaterial
            map={$texture} // 텍스처 할당
            transparent={true} // 투명 속성 활성화
            // opacity={selectedCloth === $clothId ? 0.8 : 1}
            color={selectedCloth === $clothId ? 'pink' : 'white'}
            depthWrite={false}
            depthTest={false}
          />
        </mesh>
      )}
    </>
  );
};
//todo : 위 아래 설정

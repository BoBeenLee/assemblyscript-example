import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface IProps {
  className?: string;
  message: string;
  delay: number;
  onFinish: () => void;
}

const Container = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 6px;
  background-color: rgba(107, 107, 107, 0.7);
  padding: 18px 0px 15px 0px;
`;

const Message = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

function ToastText(props: IProps) {
  const { className, message } = props;

  const show = () => {
    const { delay } = props;
    setTimeout(hide, delay);
  };
  const hide = () => {
    const { onFinish } = props;
    onFinish();
  };

  useEffect(() => {
    show();
  }, [show]);

  return (
    <Container
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Message>{message}</Message>
    </Container>
  );
}

export default ToastText;

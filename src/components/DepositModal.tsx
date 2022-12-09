interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const DepositModal = ({ showModal , setShowModal } : Props) => {
  return (
    <>
      {
        showModal ?
          (
            <></>
          ) :
          <></>
      }
    </>
  )
}

export default DepositModal;
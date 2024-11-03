const MessageAlert = ({ message }) => {
    if (!message) return null;
  
    return (
      <div className={`p-2 rounded mb-4 ${
        message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
      }`}>
        {message}
      </div>
    );
  };
  
  export default MessageAlert;
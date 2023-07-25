const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, onEqualPress: (formula: string) => void, formula: string) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    onEqualPress(formula);
  }
  if (event.key === 'Backspace') {
    return;
  }
  if (!`${event.key}`.match(/^[0-9-+%\*]$/)) {
    event.preventDefault();
    return;
  }
}

export { handleKeyPress };
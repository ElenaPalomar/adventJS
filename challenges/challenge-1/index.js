function wrapping(gifts) {

  const wrappingGifts = gifts.map(item => {
    const n = item.length;
    const nAsterisk = '*'.repeat(n + 2);

    return [nAsterisk, `*${item}*`, nAsterisk].join('\n')
  });

  return wrappingGifts;
}

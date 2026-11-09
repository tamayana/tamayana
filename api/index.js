module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    version: "1.0.0",
    data: {
      developer: {
        name: "Mr.Tamaaa",
        from: "Pontianak, Kalimantan Barat",
        channel: "https://whatsapp.com/channel/0029Vb96v4e72WTsFquwB441",
        project: ["TamaBotWa", "MCTama"],
        status: "Ngoding tiap hari!"
      }
    }
  });
};

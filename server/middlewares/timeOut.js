const timeOut = (req, res, next) => {
    const timeoutId = setTimeout(() => {
        res.status(504).json({ error: "Request timeout" });
    }, 10000); // 10 ثوانٍ

    res.on("finish", () => clearTimeout(timeoutId)); // إلغاء الـ Timeout لو انتهى الطلب
    next();
};

export default timeOut;

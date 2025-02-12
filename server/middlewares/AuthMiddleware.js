import jwt from "jsonwebtoken";

export const verifyToken = (request, response, next) => {
    console.log(request.cookies); // Corrected `req` to `request`
    
    const token = request.cookies.jwt; // Corrected `cookie` to `cookies`
    console.log({ token });

    if (!token) {
        return response.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        request.user = decoded; // Attach user data to request
        next(); // Call next middleware
    } catch (error) {
        console.error("Token verification error:", error);
        return response.status(403).json({ message: "Invalid or expired token." });
    }
};

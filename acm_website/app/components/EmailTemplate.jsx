import * as React from "react";

export const EmailTemplate = ({ name, email, message }) => (
  <div
    style={{
      fontFamily: "Arial, Helvetica, sans-serif",
      backgroundColor: "#f5f6fa",
      padding: "40px",
      maxWidth: "600px",
      margin: "0 auto",
      borderRadius: "10px",
      border: "1px solid #e0e4e8",
    }}
  >
    {/* Header */}
    <div
      style={{
        backgroundColor: "#3b82f6",
        padding: "20px",
        borderRadius: "10px 10px 0 0",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          margin: "0",
          fontWeight: "bold",
          lineHeight: "1.2",
        }}
      >
        New Contact Form Submission
      </h1>
      <p
        style={{
          fontSize: "16px",
          margin: "10px 0 0",
          lineHeight: "1.4",
          opacity: "0.9",
        }}
      >
        Received from ACM USAR Website
      </p>
    </div>

    {/* Content */}
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          color: "#1f2937",
          fontWeight: "600",
          margin: "0 0 20px",
          borderBottom: "2px solid #3b82f6",
          paddingBottom: "8px",
          width: "fit-content",
        }}
      >
        Submission Details
      </h2>

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            margin: "0 0 10px",
            lineHeight: "1.5",
          }}
        >
          <strong
            style={{ color: "#3b82f6", display: "inline-block", width: "80px" }}
          >
            Name:
          </strong>{" "}
          {name}
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            margin: "0 0 10px",
            lineHeight: "1.5",
          }}
        >
          <strong
            style={{ color: "#3b82f6", display: "inline-block", width: "80px" }}
          >
            Email:
          </strong>{" "}
          <a
            href={`mailto:${email}`}
            style={{
              color: "#3b82f6",
              textDecoration: "none",
            }}
          >
            {email}
          </a>
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "20px",
          borderRadius: "8px",
          borderLeft: "4px solid #3b82f6",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            margin: "0",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong
            style={{ color: "#3b82f6", display: "block", marginBottom: "10px" }}
          >
            Message:
          </strong>
          {message}
        </p>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        textAlign: "center",
        paddingTop: "20px",
        color: "#6b7280",
        fontSize: "14px",
        lineHeight: "1.4",
      }}
    >
      <p style={{ margin: "0" }}>
        Sent by{" "}
        <span style={{ color: "#3b82f6", fontWeight: "bold" }}>ACM USAR</span>{" "}
        Contact System
      </p>
      <p style={{ margin: "5px 0 0" }}>
        © {new Date().getFullYear()} ACM USAR. All rights reserved.
      </p>
    </div>
  </div>
);
